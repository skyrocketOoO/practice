// @generated by protoc-gen-es v1.10.0
// @generated from file main.proto (package proto, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message proto.ListAccountReq
 */
export const ListAccountReq = /*@__PURE__*/ proto3.makeMessageType(
  "proto.ListAccountReq",
  [],
);

/**
 * @generated from message proto.ListAccountResp
 */
export const ListAccountResp = /*@__PURE__*/ proto3.makeMessageType(
  "proto.ListAccountResp",
  () => [
    { no: 1, name: "List", kind: "message", T: Account, repeated: true },
    { no: 2, name: "Total", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message proto.Account
 */
export const Account = /*@__PURE__*/ proto3.makeMessageType(
  "proto.Account",
  () => [
    { no: 1, name: "UserName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "DisplayName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "State", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

