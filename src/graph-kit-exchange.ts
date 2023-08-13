import {
  Approval as ApprovalEvent,
  GraphKitExchange__ETHToTokenSwap as GraphKitExchange__ETHToTokenSwapEvent,
  GraphKitExchange__LiquidityAdded as GraphKitExchange__LiquidityAddedEvent,
  GraphKitExchange__LiquidityRemoved as GraphKitExchange__LiquidityRemovedEvent,
  GraphKitExchange__TokenToETHSwap as GraphKitExchange__TokenToETHSwapEvent,
  GraphKitExchange__TokenToTokenSwap as GraphKitExchange__TokenToTokenSwapEvent,
  Transfer as TransferEvent
} from "../generated/GraphKitExchange/GraphKitExchange"
import {
  Approval,
  GraphKitExchange__ETHToTokenSwap,
  GraphKitExchange__LiquidityAdded,
  GraphKitExchange__LiquidityRemoved,
  GraphKitExchange__TokenToETHSwap,
  GraphKitExchange__TokenToTokenSwap,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGraphKitExchange__ETHToTokenSwap(
  event: GraphKitExchange__ETHToTokenSwapEvent
): void {
  let entity = new GraphKitExchange__ETHToTokenSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._ethAmount = event.params._ethAmount
  entity._tokenAmount = event.params._tokenAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGraphKitExchange__LiquidityAdded(
  event: GraphKitExchange__LiquidityAddedEvent
): void {
  let entity = new GraphKitExchange__LiquidityAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._ethAmount = event.params._ethAmount
  entity._tokenAmount = event.params._tokenAmount
  entity._lpAmount = event.params._lpAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGraphKitExchange__LiquidityRemoved(
  event: GraphKitExchange__LiquidityRemovedEvent
): void {
  let entity = new GraphKitExchange__LiquidityRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._ethAmount = event.params._ethAmount
  entity._tokenAmount = event.params._tokenAmount
  entity._lpAmount = event.params._lpAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGraphKitExchange__TokenToETHSwap(
  event: GraphKitExchange__TokenToETHSwapEvent
): void {
  let entity = new GraphKitExchange__TokenToETHSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._tokenAmount = event.params._tokenAmount
  entity._ethAmount = event.params._ethAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGraphKitExchange__TokenToTokenSwap(
  event: GraphKitExchange__TokenToTokenSwapEvent
): void {
  let entity = new GraphKitExchange__TokenToTokenSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._sentTokenAddress = event.params._sentTokenAddress
  entity._receivedTokenAddress = event.params._receivedTokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
