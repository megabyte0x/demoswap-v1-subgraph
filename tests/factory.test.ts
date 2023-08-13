import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { Factory__ExchangeCreated } from "../generated/schema"
import { Factory__ExchangeCreated as Factory__ExchangeCreatedEvent } from "../generated/Factory/Factory"
import { handleFactory__ExchangeCreated } from "../src/factory"
import { createFactory__ExchangeCreatedEvent } from "./factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _tokenAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _exchangeAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newFactory__ExchangeCreatedEvent = createFactory__ExchangeCreatedEvent(
      _tokenAddress,
      _exchangeAddress
    )
    handleFactory__ExchangeCreated(newFactory__ExchangeCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Factory__ExchangeCreated created and stored", () => {
    assert.entityCount("Factory__ExchangeCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Factory__ExchangeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_tokenAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Factory__ExchangeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_exchangeAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
