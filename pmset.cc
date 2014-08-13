#include <node.h>
#include <v8.h>
#include <CoreFoundation/CoreFoundation.h>
#include <pwr_mgt/IOPMLib.h>

using namespace v8;

// Extracts a C string from a V8 Utf8Value.
const char* ToCString(const v8::String::Utf8Value& value) {
    return *value ? *value : "<string conversion failed>";
}

Handle<Value> Method(const Arguments& args) {
    HandleScope scope;

    if (args.Length() < 1) {
        ThrowException(Exception::TypeError(String::New("Wrong number of arguments")));
        return scope.Close(Undefined());
    }
    if (!args[0]->IsString()) {
        return ThrowException(Exception::TypeError(String::New("Invalid argument: First argument must be a string.")));
    }

    // String::Utf8Value(args[0])
    //Local<String> str = args[0]->ToString();
    v8::String::Utf8Value str(args[0]);
    const char *aStr = ToCString(str);
    CFStringRef aReason = CFStringCreateWithCString(NULL, aStr, CFStringGetSystemEncoding());
    CFStringRef aItem = CFSTR("NoIdleSleepAssertion");
    IOPMAssertionID assertionId;

    IOPMAssertionCreateWithName(aItem, 255, aReason, &assertionId);

    Local<Number> num = Number::New(assertionId);

    return scope.Close(num);
}

Handle<Value> Method1(const Arguments& args) {
    HandleScope scope;

    if (args.Length() != 1) {
        ThrowException(Exception::TypeError(String::New("Wrong number of arguments")));
        return scope.Close(Undefined());
    }
    if (!args[0]->IsNumber()) {
        return ThrowException(Exception::TypeError(String::New("Invalid arguments: First argument must be a number")));
    }

    IOPMAssertionID assertionId = args[0]->Int32Value();

    int ret = IOPMAssertionRelease(assertionId);
    Local<Number> num = Number::New(ret);

    return scope.Close(num);
}

void init(Handle<Object> target) {
    target->Set(String::NewSymbol("noIdleSleep"),
            FunctionTemplate::New(Method)->GetFunction());
    target->Set(String::NewSymbol("release"),
            FunctionTemplate::New(Method1)->GetFunction());
}

NODE_MODULE(pmset, init)

