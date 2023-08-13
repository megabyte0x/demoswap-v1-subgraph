import { Factory__ExchangeCreated as Factory__ExchangeCreatedEvent } from "../generated/Factory/Factory"
import { Factory__ExchangeCreated } from "../generated/schema"

export function handleFactory__ExchangeCreated(
  event: Factory__ExchangeCreatedEvent
): void {
  let entity = new Factory__ExchangeCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenAddress = event.params._tokenAddress
  entity._exchangeAddress = event.params._exchangeAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
