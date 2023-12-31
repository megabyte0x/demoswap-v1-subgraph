// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GraphKitExchange__ETHToTokenSwap extends ethereum.Event {
  get params(): GraphKitExchange__ETHToTokenSwap__Params {
    return new GraphKitExchange__ETHToTokenSwap__Params(this);
  }
}

export class GraphKitExchange__ETHToTokenSwap__Params {
  _event: GraphKitExchange__ETHToTokenSwap;

  constructor(event: GraphKitExchange__ETHToTokenSwap) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _ethAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _tokenAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GraphKitExchange__LiquidityAdded extends ethereum.Event {
  get params(): GraphKitExchange__LiquidityAdded__Params {
    return new GraphKitExchange__LiquidityAdded__Params(this);
  }
}

export class GraphKitExchange__LiquidityAdded__Params {
  _event: GraphKitExchange__LiquidityAdded;

  constructor(event: GraphKitExchange__LiquidityAdded) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _ethAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _tokenAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _lpAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GraphKitExchange__LiquidityRemoved extends ethereum.Event {
  get params(): GraphKitExchange__LiquidityRemoved__Params {
    return new GraphKitExchange__LiquidityRemoved__Params(this);
  }
}

export class GraphKitExchange__LiquidityRemoved__Params {
  _event: GraphKitExchange__LiquidityRemoved;

  constructor(event: GraphKitExchange__LiquidityRemoved) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _ethAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _tokenAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _lpAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GraphKitExchange__TokenToETHSwap extends ethereum.Event {
  get params(): GraphKitExchange__TokenToETHSwap__Params {
    return new GraphKitExchange__TokenToETHSwap__Params(this);
  }
}

export class GraphKitExchange__TokenToETHSwap__Params {
  _event: GraphKitExchange__TokenToETHSwap;

  constructor(event: GraphKitExchange__TokenToETHSwap) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _ethAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GraphKitExchange__TokenToTokenSwap extends ethereum.Event {
  get params(): GraphKitExchange__TokenToTokenSwap__Params {
    return new GraphKitExchange__TokenToTokenSwap__Params(this);
  }
}

export class GraphKitExchange__TokenToTokenSwap__Params {
  _event: GraphKitExchange__TokenToTokenSwap;

  constructor(event: GraphKitExchange__TokenToTokenSwap) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _sentTokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _receivedTokenAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GraphKitExchange__removeLiquidityResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getEthAmount(): BigInt {
    return this.value0;
  }

  getTokenAmount(): BigInt {
    return this.value1;
  }
}

export class GraphKitExchange extends ethereum.SmartContract {
  static bind(address: Address): GraphKitExchange {
    return new GraphKitExchange("GraphKitExchange", address);
  }

  NAME(): string {
    let result = super.call("NAME", "NAME():(string)", []);

    return result[0].toString();
  }

  try_NAME(): ethereum.CallResult<string> {
    let result = super.tryCall("NAME", "NAME():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  SYMBOL(): string {
    let result = super.call("SYMBOL", "SYMBOL():(string)", []);

    return result[0].toString();
  }

  try_SYMBOL(): ethereum.CallResult<string> {
    let result = super.tryCall("SYMBOL", "SYMBOL():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getETHAmount(_tokenSold: BigInt): BigInt {
    let result = super.call("getETHAmount", "getETHAmount(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenSold)
    ]);

    return result[0].toBigInt();
  }

  try_getETHAmount(_tokenSold: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getETHAmount",
      "getETHAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenSold)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPrice(inputReserve: BigInt, outputReserve: BigInt): BigInt {
    let result = super.call("getPrice", "getPrice(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(inputReserve),
      ethereum.Value.fromUnsignedBigInt(outputReserve)
    ]);

    return result[0].toBigInt();
  }

  try_getPrice(
    inputReserve: BigInt,
    outputReserve: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPrice",
      "getPrice(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(inputReserve),
        ethereum.Value.fromUnsignedBigInt(outputReserve)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getReserveBalance(): BigInt {
    let result = super.call(
      "getReserveBalance",
      "getReserveBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getReserveBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getReserveBalance",
      "getReserveBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenAmount(_ethSold: BigInt): BigInt {
    let result = super.call(
      "getTokenAmount",
      "getTokenAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_ethSold)]
    );

    return result[0].toBigInt();
  }

  try_getTokenAmount(_ethSold: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenAmount",
      "getTokenAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_ethSold)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  i_factoryAddress(): Address {
    let result = super.call(
      "i_factoryAddress",
      "i_factoryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_i_factoryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "i_factoryAddress",
      "i_factoryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  i_tokenAddress(): Address {
    let result = super.call("i_tokenAddress", "i_tokenAddress():(address)", []);

    return result[0].toAddress();
  }

  try_i_tokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "i_tokenAddress",
      "i_tokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  removeLiquidity(_amount: BigInt): GraphKitExchange__removeLiquidityResult {
    let result = super.call(
      "removeLiquidity",
      "removeLiquidity(uint256):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_amount)]
    );

    return new GraphKitExchange__removeLiquidityResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_removeLiquidity(
    _amount: BigInt
  ): ethereum.CallResult<GraphKitExchange__removeLiquidityResult> {
    let result = super.tryCall(
      "removeLiquidity",
      "removeLiquidity(uint256):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_amount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GraphKitExchange__removeLiquidityResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(to: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(to: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(from: Address, to: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: Address,
    to: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AddLiquidityCall extends ethereum.Call {
  get inputs(): AddLiquidityCall__Inputs {
    return new AddLiquidityCall__Inputs(this);
  }

  get outputs(): AddLiquidityCall__Outputs {
    return new AddLiquidityCall__Outputs(this);
  }
}

export class AddLiquidityCall__Inputs {
  _call: AddLiquidityCall;

  constructor(call: AddLiquidityCall) {
    this._call = call;
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddLiquidityCall__Outputs {
  _call: AddLiquidityCall;

  constructor(call: AddLiquidityCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class EthToTokenSwapCall extends ethereum.Call {
  get inputs(): EthToTokenSwapCall__Inputs {
    return new EthToTokenSwapCall__Inputs(this);
  }

  get outputs(): EthToTokenSwapCall__Outputs {
    return new EthToTokenSwapCall__Outputs(this);
  }
}

export class EthToTokenSwapCall__Inputs {
  _call: EthToTokenSwapCall;

  constructor(call: EthToTokenSwapCall) {
    this._call = call;
  }

  get _minTokens(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EthToTokenSwapCall__Outputs {
  _call: EthToTokenSwapCall;

  constructor(call: EthToTokenSwapCall) {
    this._call = call;
  }
}

export class EthToTokenTransferCall extends ethereum.Call {
  get inputs(): EthToTokenTransferCall__Inputs {
    return new EthToTokenTransferCall__Inputs(this);
  }

  get outputs(): EthToTokenTransferCall__Outputs {
    return new EthToTokenTransferCall__Outputs(this);
  }
}

export class EthToTokenTransferCall__Inputs {
  _call: EthToTokenTransferCall;

  constructor(call: EthToTokenTransferCall) {
    this._call = call;
  }

  get _minTokens(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class EthToTokenTransferCall__Outputs {
  _call: EthToTokenTransferCall;

  constructor(call: EthToTokenTransferCall) {
    this._call = call;
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveLiquidityCall extends ethereum.Call {
  get inputs(): RemoveLiquidityCall__Inputs {
    return new RemoveLiquidityCall__Inputs(this);
  }

  get outputs(): RemoveLiquidityCall__Outputs {
    return new RemoveLiquidityCall__Outputs(this);
  }
}

export class RemoveLiquidityCall__Inputs {
  _call: RemoveLiquidityCall;

  constructor(call: RemoveLiquidityCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveLiquidityCall__Outputs {
  _call: RemoveLiquidityCall;

  constructor(call: RemoveLiquidityCall) {
    this._call = call;
  }

  get ethAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get tokenAmount(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class TokenToETHSwapCall extends ethereum.Call {
  get inputs(): TokenToETHSwapCall__Inputs {
    return new TokenToETHSwapCall__Inputs(this);
  }

  get outputs(): TokenToETHSwapCall__Outputs {
    return new TokenToETHSwapCall__Outputs(this);
  }
}

export class TokenToETHSwapCall__Inputs {
  _call: TokenToETHSwapCall;

  constructor(call: TokenToETHSwapCall) {
    this._call = call;
  }

  get _tokenSold(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _minTokens(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TokenToETHSwapCall__Outputs {
  _call: TokenToETHSwapCall;

  constructor(call: TokenToETHSwapCall) {
    this._call = call;
  }
}

export class TokenToTokenSwapCall extends ethereum.Call {
  get inputs(): TokenToTokenSwapCall__Inputs {
    return new TokenToTokenSwapCall__Inputs(this);
  }

  get outputs(): TokenToTokenSwapCall__Outputs {
    return new TokenToTokenSwapCall__Outputs(this);
  }
}

export class TokenToTokenSwapCall__Inputs {
  _call: TokenToTokenSwapCall;

  constructor(call: TokenToTokenSwapCall) {
    this._call = call;
  }

  get _tokensSold(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _minTokensBought(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class TokenToTokenSwapCall__Outputs {
  _call: TokenToTokenSwapCall;

  constructor(call: TokenToTokenSwapCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
