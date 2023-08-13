import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  GraphKitExchange__ETHToTokenSwap,
  GraphKitExchange__LiquidityAdded,
  GraphKitExchange__LiquidityRemoved,
  GraphKitExchange__TokenToETHSwap,
  GraphKitExchange__TokenToTokenSwap,
  Transfer
} from "../generated/GraphKitExchange/GraphKitExchange"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createGraphKitExchange__ETHToTokenSwapEvent(
  _user: Address,
  _ethAmount: BigInt,
  _tokenAmount: BigInt
): GraphKitExchange__ETHToTokenSwap {
  let graphKitExchangeEthToTokenSwapEvent = changetype<
    GraphKitExchange__ETHToTokenSwap
  >(newMockEvent())

  graphKitExchangeEthToTokenSwapEvent.parameters = new Array()

  graphKitExchangeEthToTokenSwapEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  graphKitExchangeEthToTokenSwapEvent.parameters.push(
    new ethereum.EventParam(
      "_ethAmount",
      ethereum.Value.fromUnsignedBigInt(_ethAmount)
    )
  )
  graphKitExchangeEthToTokenSwapEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAmount",
      ethereum.Value.fromUnsignedBigInt(_tokenAmount)
    )
  )

  return graphKitExchangeEthToTokenSwapEvent
}

export function createGraphKitExchange__LiquidityAddedEvent(
  _user: Address,
  _ethAmount: BigInt,
  _tokenAmount: BigInt,
  _lpAmount: BigInt
): GraphKitExchange__LiquidityAdded {
  let graphKitExchangeLiquidityAddedEvent = changetype<
    GraphKitExchange__LiquidityAdded
  >(newMockEvent())

  graphKitExchangeLiquidityAddedEvent.parameters = new Array()

  graphKitExchangeLiquidityAddedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  graphKitExchangeLiquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_ethAmount",
      ethereum.Value.fromUnsignedBigInt(_ethAmount)
    )
  )
  graphKitExchangeLiquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAmount",
      ethereum.Value.fromUnsignedBigInt(_tokenAmount)
    )
  )
  graphKitExchangeLiquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_lpAmount",
      ethereum.Value.fromUnsignedBigInt(_lpAmount)
    )
  )

  return graphKitExchangeLiquidityAddedEvent
}

export function createGraphKitExchange__LiquidityRemovedEvent(
  _user: Address,
  _ethAmount: BigInt,
  _tokenAmount: BigInt,
  _lpAmount: BigInt
): GraphKitExchange__LiquidityRemoved {
  let graphKitExchangeLiquidityRemovedEvent = changetype<
    GraphKitExchange__LiquidityRemoved
  >(newMockEvent())

  graphKitExchangeLiquidityRemovedEvent.parameters = new Array()

  graphKitExchangeLiquidityRemovedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  graphKitExchangeLiquidityRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_ethAmount",
      ethereum.Value.fromUnsignedBigInt(_ethAmount)
    )
  )
  graphKitExchangeLiquidityRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAmount",
      ethereum.Value.fromUnsignedBigInt(_tokenAmount)
    )
  )
  graphKitExchangeLiquidityRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_lpAmount",
      ethereum.Value.fromUnsignedBigInt(_lpAmount)
    )
  )

  return graphKitExchangeLiquidityRemovedEvent
}

export function createGraphKitExchange__TokenToETHSwapEvent(
  _user: Address,
  _tokenAmount: BigInt,
  _ethAmount: BigInt
): GraphKitExchange__TokenToETHSwap {
  let graphKitExchangeTokenToEthSwapEvent = changetype<
    GraphKitExchange__TokenToETHSwap
  >(newMockEvent())

  graphKitExchangeTokenToEthSwapEvent.parameters = new Array()

  graphKitExchangeTokenToEthSwapEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  graphKitExchangeTokenToEthSwapEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAmount",
      ethereum.Value.fromUnsignedBigInt(_tokenAmount)
    )
  )
  graphKitExchangeTokenToEthSwapEvent.parameters.push(
    new ethereum.EventParam(
      "_ethAmount",
      ethereum.Value.fromUnsignedBigInt(_ethAmount)
    )
  )

  return graphKitExchangeTokenToEthSwapEvent
}

export function createGraphKitExchange__TokenToTokenSwapEvent(
  _user: Address,
  _sentTokenAddress: Address,
  _receivedTokenAddress: Address
): GraphKitExchange__TokenToTokenSwap {
  let graphKitExchangeTokenToTokenSwapEvent = changetype<
    GraphKitExchange__TokenToTokenSwap
  >(newMockEvent())

  graphKitExchangeTokenToTokenSwapEvent.parameters = new Array()

  graphKitExchangeTokenToTokenSwapEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  graphKitExchangeTokenToTokenSwapEvent.parameters.push(
    new ethereum.EventParam(
      "_sentTokenAddress",
      ethereum.Value.fromAddress(_sentTokenAddress)
    )
  )
  graphKitExchangeTokenToTokenSwapEvent.parameters.push(
    new ethereum.EventParam(
      "_receivedTokenAddress",
      ethereum.Value.fromAddress(_receivedTokenAddress)
    )
  )

  return graphKitExchangeTokenToTokenSwapEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
