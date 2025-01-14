/**
 * @fileoverview Export symbols needed by generated code in CommonJS style.
 *
 * Note that public methods called by generated code are exposed
 * using Closure Compiler's @export annotation
 */
goog.module('grpc.web.Exports');

const CallOptions = goog.require('grpc.web.CallOptions');
const MethodDescriptor = goog.require('grpc.web.MethodDescriptor');
const GrpcWebClientBase = goog.require('grpc.web.GrpcWebClientBase');
const RpcError = goog.require('grpc.web.RpcError');
const StatusCode = goog.require('grpc.web.StatusCode');
const MethodType = goog.require('grpc.web.MethodType');

module['exports']['CallOptions'] = CallOptions;
module['exports']['MethodDescriptor'] = MethodDescriptor;
module['exports']['GrpcWebClientBase'] = GrpcWebClientBase;
module['exports']['RpcError'] = RpcError;
module['exports']['StatusCode'] = StatusCode;
module['exports']['MethodType'] = MethodType;
