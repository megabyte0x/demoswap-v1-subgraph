import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { Factory__ExchangeCreated } from "../generated/Factory/Factory"

export function createFactory__ExchangeCreatedEvent(
  _tokenAddress: Address,
  _exchangeAddress: Address
): Factory__ExchangeCreated {
  let factoryExchangeCreatedEvent = changetype<Factory__ExchangeCreated>(
    newMockEvent()
  )

  factoryExchangeCreatedEvent.parameters = new Array()

  factoryExchangeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddress",
      ethereum.Value.fromAddress(_tokenAddress)
    )
  )
  factoryExchangeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_exchangeAddress",
      ethereum.Value.fromAddress(_exchangeAddress)
    )
  )

  return factoryExchangeCreatedEvent
}
