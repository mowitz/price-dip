/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Address = {
  __typename?: "Address"
  address1?: Maybe<Scalars["String"]["output"]>
  address2?: Maybe<Scalars["String"]["output"]>
  address3?: Maybe<Scalars["String"]["output"]>
  city?: Maybe<Scalars["String"]["output"]>
  country?: Maybe<Scalars["String"]["output"]>
  latitude?: Maybe<Scalars["String"]["output"]>
  longitude?: Maybe<Scalars["String"]["output"]>
  postalCode?: Maybe<Scalars["String"]["output"]>
}

export enum AppScreen {
  Comparison = "COMPARISON",
  Consumption = "CONSUMPTION",
  CustomerProfile = "CUSTOMER_PROFILE",
  Disaggregation = "DISAGGREGATION",
  Home = "HOME",
  HomeProfile = "HOME_PROFILE",
  Invoices = "INVOICES",
  MeterReading = "METER_READING",
  Notifications = "NOTIFICATIONS",
  Reports = "REPORTS",
}

export type Consumption = {
  __typename?: "Consumption"
  /** kWh consumed */
  consumption?: Maybe<Scalars["Float"]["output"]>
  consumptionUnit?: Maybe<Scalars["String"]["output"]>
  cost?: Maybe<Scalars["Float"]["output"]>
  /** The cost currency */
  currency?: Maybe<Scalars["String"]["output"]>
  from: Scalars["String"]["output"]
  to: Scalars["String"]["output"]
  /**
   * Total cost of the consumption
   * @deprecated use cost instead.
   */
  totalCost?: Maybe<Scalars["Float"]["output"]>
  /** @deprecated use cost instead */
  unitCost?: Maybe<Scalars["Float"]["output"]>
  unitPrice?: Maybe<Scalars["Float"]["output"]>
  unitPriceVAT?: Maybe<Scalars["Float"]["output"]>
}

export type ContactInfo = {
  __typename?: "ContactInfo"
  /** The email of the corresponding entity */
  email?: Maybe<Scalars["String"]["output"]>
  /** The mobile phone no of the corresponding entity */
  mobile?: Maybe<Scalars["String"]["output"]>
}

export enum EnergyResolution {
  Annual = "ANNUAL",
  Daily = "DAILY",
  Hourly = "HOURLY",
  Monthly = "MONTHLY",
  Weekly = "WEEKLY",
}

export enum HeatingSource {
  Air2AirHeatpump = "AIR2AIR_HEATPUMP",
  Air2WaterHeatpump = "AIR2WATER_HEATPUMP",
  DistrictHeating = "DISTRICT_HEATING",
  Electricity = "ELECTRICITY",
  ElectricBoiler = "ELECTRIC_BOILER",
  Ground = "GROUND",
  Other = "OTHER",
}

export type Home = {
  __typename?: "Home"
  address?: Maybe<Address>
  /** The chosen avatar for the home */
  appAvatar: HomeAvatar
  /** The nickname given to the home by the user */
  appNickname?: Maybe<Scalars["String"]["output"]>
  /** Consumption connection */
  consumption?: Maybe<HomeConsumptionConnection>
  /** The current/latest subscription related to the home */
  currentSubscription?: Maybe<Subscription>
  /** Home features */
  features?: Maybe<HomeFeatures>
  /** Whether the home has a ventilation system */
  hasVentilationSystem?: Maybe<Scalars["Boolean"]["output"]>
  id: Scalars["ID"]["output"]
  /** The main fuse size */
  mainFuseSize?: Maybe<Scalars["Int"]["output"]>
  meteringPointData?: Maybe<MeteringPointData>
  /** The number of people living in the home */
  numberOfResidents?: Maybe<Scalars["Int"]["output"]>
  /** The registered owner of the house */
  owner?: Maybe<LegalEntity>
  /** The primary form of heating in the household */
  primaryHeatingSource?: Maybe<HeatingSource>
  /** Production connection */
  production?: Maybe<HomeProductionConnection>
  /** The size of the home in square meters */
  size?: Maybe<Scalars["Int"]["output"]>
  /** All historic subscriptions related to the home */
  subscriptions: Array<Maybe<Subscription>>
  /** The time zone the home resides in */
  timeZone: Scalars["String"]["output"]
  /** The type of home. */
  type: HomeType
}

export type HomeConsumptionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  before?: InputMaybe<Scalars["String"]["input"]>
  filterEmptyNodes?: InputMaybe<Scalars["Boolean"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
  last?: InputMaybe<Scalars["Int"]["input"]>
  resolution: EnergyResolution
}

export type HomeProductionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  before?: InputMaybe<Scalars["String"]["input"]>
  filterEmptyNodes?: InputMaybe<Scalars["Boolean"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
  last?: InputMaybe<Scalars["Int"]["input"]>
  resolution: EnergyResolution
}

export enum HomeAvatar {
  Apartment = "APARTMENT",
  Castle = "CASTLE",
  Cottage = "COTTAGE",
  Floorhouse1 = "FLOORHOUSE1",
  Floorhouse2 = "FLOORHOUSE2",
  Floorhouse3 = "FLOORHOUSE3",
  Rowhouse = "ROWHOUSE",
}

export type HomeConsumptionConnection = {
  __typename?: "HomeConsumptionConnection"
  edges?: Maybe<Array<Maybe<HomeConsumptionEdge>>>
  nodes?: Maybe<Array<Maybe<Consumption>>>
  pageInfo: HomeConsumptionPageInfo
}

export type HomeConsumptionEdge = {
  __typename?: "HomeConsumptionEdge"
  cursor: Scalars["String"]["output"]
  node: Consumption
}

export type HomeConsumptionPageInfo = PageInfo & {
  __typename?: "HomeConsumptionPageInfo"
  /** The number of elements in the list */
  count?: Maybe<Scalars["Int"]["output"]>
  /** The currency of the page */
  currency?: Maybe<Scalars["String"]["output"]>
  /** The global ID of the last element in the list */
  endCursor?: Maybe<Scalars["String"]["output"]>
  /**
   * Page energy cost
   * @deprecated redundant
   */
  energyCost?: Maybe<Scalars["Float"]["output"]>
  /** Number of entries that have been filtered from result set due to empty nodes */
  filtered: Scalars["Int"]["output"]
  /** True if further pages are available */
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>
  /** True if previous pages are available */
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>
  /** The global ID of the first element in the list */
  startCursor?: Maybe<Scalars["String"]["output"]>
  /** Total consumption for page */
  totalConsumption?: Maybe<Scalars["Float"]["output"]>
  /** Page total cost */
  totalCost?: Maybe<Scalars["Float"]["output"]>
}

export type HomeFeatures = {
  __typename?: "HomeFeatures"
  /** 'true' if Tibber Pulse or Watty device is paired at home */
  realTimeConsumptionEnabled?: Maybe<Scalars["Boolean"]["output"]>
}

export type HomeProductionConnection = {
  __typename?: "HomeProductionConnection"
  edges?: Maybe<Array<Maybe<HomeProductionEdge>>>
  nodes?: Maybe<Array<Maybe<Production>>>
  pageInfo: HomeProductionPageInfo
}

export type HomeProductionEdge = {
  __typename?: "HomeProductionEdge"
  cursor: Scalars["String"]["output"]
  node: Production
}

export type HomeProductionPageInfo = PageInfo & {
  __typename?: "HomeProductionPageInfo"
  /** The number of elements in the list */
  count?: Maybe<Scalars["Int"]["output"]>
  /** The currency of the page */
  currency?: Maybe<Scalars["String"]["output"]>
  /** The global ID of the last element in the list */
  endCursor?: Maybe<Scalars["String"]["output"]>
  /** Number of entries that have been filtered from result set due to empty nodes */
  filtered: Scalars["Int"]["output"]
  /** True if further pages are available */
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>
  /** True if previous pages are available */
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>
  /** The global ID of the first element in the list */
  startCursor?: Maybe<Scalars["String"]["output"]>
  /** Page total production */
  totalProduction?: Maybe<Scalars["Float"]["output"]>
  /** Page total profit */
  totalProfit?: Maybe<Scalars["Float"]["output"]>
}

export enum HomeType {
  Apartment = "APARTMENT",
  Cottage = "COTTAGE",
  House = "HOUSE",
  Rowhouse = "ROWHOUSE",
}

export type LegalEntity = {
  __typename?: "LegalEntity"
  /** Address information for the entity */
  address?: Maybe<Address>
  /** Contact information of the entity */
  contactInfo?: Maybe<ContactInfo>
  /** First/Christian name of the entity */
  firstName?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  /** 'true' if the entity is a company */
  isCompany?: Maybe<Scalars["Boolean"]["output"]>
  /** The primary language of the entity */
  language?: Maybe<Scalars["String"]["output"]>
  /** Last name of the entity */
  lastName?: Maybe<Scalars["String"]["output"]>
  /** Middle name of the entity */
  middleName?: Maybe<Scalars["String"]["output"]>
  /** Full name of the entity */
  name: Scalars["String"]["output"]
  /** Organization number - only populated if entity is a company (isCompany=true) */
  organizationNo?: Maybe<Scalars["String"]["output"]>
}

export type LiveMeasurement = {
  __typename?: "LiveMeasurement"
  /** kWh consumed since midnight */
  accumulatedConsumption: Scalars["Float"]["output"]
  /** kWh consumed since since last hour shift */
  accumulatedConsumptionLastHour: Scalars["Float"]["output"]
  /** Accumulated cost since midnight; requires active Tibber power deal; includes VAT (where applicable) */
  accumulatedCost?: Maybe<Scalars["Float"]["output"]>
  /** net kWh produced since midnight */
  accumulatedProduction: Scalars["Float"]["output"]
  /** net kWh produced since last hour shift */
  accumulatedProductionLastHour: Scalars["Float"]["output"]
  /** Accumulated reward since midnight; requires active Tibber power deal */
  accumulatedReward?: Maybe<Scalars["Float"]["output"]>
  /** Average consumption since midnight (Watt) */
  averagePower: Scalars["Float"]["output"]
  /** Currency of displayed cost; requires active Tibber power deal */
  currency?: Maybe<Scalars["String"]["output"]>
  /** Current on L1; on Kaifa and Aidon meters the value is not part of every HAN data frame therefore the value is null at timestamps with second value other than 0, 10, 20, 30, 40, 50. There can be other deviations based on concrete meter firmware. */
  currentL1?: Maybe<Scalars["Float"]["output"]>
  /** Current on L2; on Kaifa and Aidon meters the value is not part of every HAN data frame therefore the value is null at timestamps with second value other than 0, 10, 20, 30, 40, 50. There can be other deviations based on concrete meter firmware. Value is always null for single phase meters. */
  currentL2?: Maybe<Scalars["Float"]["output"]>
  /** Current on L3; on Kaifa and Aidon meters the value is not part of every HAN data frame therefore the value is null at timestamps with second value other than 0, 10, 20, 30, 40, 50. There can be other deviations based on concrete meter firmware. Value is always null for single phase meters. */
  currentL3?: Maybe<Scalars["Float"]["output"]>
  /**
   * Current on phase 1; on Kaifa and Aidon meters the value is not part of every HAN data frame therefore the value is null at timestamps with second value other than 0, 10, 20, 30, 40, 50. There can be other deviations based on concrete meter firmware.
   * @deprecated Replaced by currentL1.
   */
  currentPhase1?: Maybe<Scalars["Float"]["output"]>
  /**
   * Current on phase 2; on Kaifa and Aidon meters the value is not part of every HAN data frame therefore the value is null at timestamps with second value other than 0, 10, 20, 30, 40, 50. There can be other deviations based on concrete meter firmware. Value is always null for single phase meters.
   * @deprecated Replaced by currentL2.
   */
  currentPhase2?: Maybe<Scalars["Float"]["output"]>
  /**
   * Current on phase 3; on Kaifa and Aidon meters the value is not part of every HAN data frame therefore the value is null at timestamps with second value other than 0, 10, 20, 30, 40, 50. There can be other deviations based on concrete meter firmware. Value is always null for single phase meters.
   * @deprecated Replaced by currentL3.
   */
  currentPhase3?: Maybe<Scalars["Float"]["output"]>
  /** Last meter active import register state (kWh) */
  lastMeterConsumption?: Maybe<Scalars["Float"]["output"]>
  /** Last meter active export register state (kWh) */
  lastMeterProduction?: Maybe<Scalars["Float"]["output"]>
  /** Peak consumption since midnight  (Watt) */
  maxPower: Scalars["Float"]["output"]
  /** Max net production since midnight (Watt) */
  maxPowerProduction?: Maybe<Scalars["Float"]["output"]>
  /** Min consumption since midnight (Watt) */
  minPower: Scalars["Float"]["output"]
  /** Min net production since midnight (Watt) */
  minPowerProduction?: Maybe<Scalars["Float"]["output"]>
  /** Consumption at the moment (Watt) */
  power: Scalars["Float"]["output"]
  /** Power factor (active power / apparent power) */
  powerFactor?: Maybe<Scalars["Float"]["output"]>
  /** Net production (A-) at the moment (Watt) */
  powerProduction?: Maybe<Scalars["Float"]["output"]>
  /** Net reactive production (Q-) at the moment (kVAr) */
  powerProductionReactive?: Maybe<Scalars["Float"]["output"]>
  /** Reactive consumption (Q+) at the moment (kVAr) */
  powerReactive?: Maybe<Scalars["Float"]["output"]>
  /** Device signal strength (Pulse - dB; Watty - percent) */
  signalStrength?: Maybe<Scalars["Int"]["output"]>
  /** Timestamp when usage occurred */
  timestamp: Scalars["String"]["output"]
  /** Voltage on phase 1; on Kaifa and Aidon meters the value is not part of every HAN data frame therefore the value is null at timestamps with second value other than 0, 10, 20, 30, 40, 50. There can be other deviations based on concrete meter firmware. */
  voltagePhase1?: Maybe<Scalars["Float"]["output"]>
  /** Voltage on phase 2; on Kaifa and Aidon meters the value is not part of every HAN data frame therefore the value is null at timestamps with second value other than 0, 10, 20, 30, 40, 50. There can be other deviations based on concrete meter firmware. Value is always null for single phase meters. */
  voltagePhase2?: Maybe<Scalars["Float"]["output"]>
  /** Voltage on phase 3; on Kaifa and Aidon meters the value is not part of every HAN data frame therefore the value is null at timestamps with second value other than 0, 10, 20, 30, 40, 50. There can be other deviations based on concrete meter firmware. Value is always null for single phase meters. */
  voltagePhase3?: Maybe<Scalars["Float"]["output"]>
}

export type MeterReadingInput = {
  homeId: Scalars["ID"]["input"]
  reading: Scalars["Int"]["input"]
  time?: InputMaybe<Scalars["String"]["input"]>
}

export type MeterReadingResponse = {
  __typename?: "MeterReadingResponse"
  homeId: Scalars["ID"]["output"]
  reading: Scalars["Int"]["output"]
  time?: Maybe<Scalars["String"]["output"]>
}

export type MeteringPointData = {
  __typename?: "MeteringPointData"
  /** The metering point ID of the home */
  consumptionEan?: Maybe<Scalars["String"]["output"]>
  /** The eltax type of the home (only relevant for Swedish homes) */
  energyTaxType?: Maybe<Scalars["String"]["output"]>
  /** The estimated annual consumption as reported by grid company */
  estimatedAnnualConsumption?: Maybe<Scalars["Int"]["output"]>
  /** The grid area the home/metering point belongs to */
  gridAreaCode?: Maybe<Scalars["String"]["output"]>
  /** The grid provider of the home */
  gridCompany?: Maybe<Scalars["String"]["output"]>
  /** The price area the home/metering point belongs to */
  priceAreaCode?: Maybe<Scalars["String"]["output"]>
  /** The metering point ID of the production */
  productionEan?: Maybe<Scalars["String"]["output"]>
  /** The VAT type of the home (only relevant for Norwegian homes) */
  vatType?: Maybe<Scalars["String"]["output"]>
}

export type PageInfo = {
  endCursor?: Maybe<Scalars["String"]["output"]>
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>
  startCursor?: Maybe<Scalars["String"]["output"]>
}

export type Price = {
  __typename?: "Price"
  /** The price currency */
  currency: Scalars["String"]["output"]
  /** Nord Pool spot price */
  energy?: Maybe<Scalars["Float"]["output"]>
  /** The price level compared to recent price values */
  level?: Maybe<PriceLevel>
  /** The start time of the price */
  startsAt?: Maybe<Scalars["String"]["output"]>
  /** The tax part of the price (guarantee of origin certificate, energy tax (Sweden only) and VAT) */
  tax?: Maybe<Scalars["Float"]["output"]>
  /** The total price (energy + taxes) */
  total?: Maybe<Scalars["Float"]["output"]>
}

export type PriceInfo = {
  __typename?: "PriceInfo"
  /** The energy price right now */
  current?: Maybe<Price>
  /** Range of prices relative to before/after arguments */
  range?: Maybe<SubscriptionPriceConnection>
  /** The hourly prices of the current day */
  today: Array<Maybe<Price>>
  /** The hourly prices of the upcoming day */
  tomorrow: Array<Maybe<Price>>
}

export type PriceInfoRangeArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>
  before?: InputMaybe<Scalars["String"]["input"]>
  first?: InputMaybe<Scalars["Int"]["input"]>
  last?: InputMaybe<Scalars["Int"]["input"]>
  resolution: PriceResolution
}

/** Price level based on trailing price average (3 days for hourly values and 30 days for daily values) */
export enum PriceLevel {
  /** The price is greater than 60 % and smaller or equal to 90 % compared to average price. */
  Cheap = "CHEAP",
  /** The price is greater or equal to 115 % and smaller than 140 % compared to average price. */
  Expensive = "EXPENSIVE",
  /** The price is greater than 90 % and smaller than 115 % compared to average price. */
  Normal = "NORMAL",
  /** The price is smaller or equal to 60 % compared to average price. */
  VeryCheap = "VERY_CHEAP",
  /** The price is greater or equal to 140 % compared to average price. */
  VeryExpensive = "VERY_EXPENSIVE",
}

export type PriceRating = {
  __typename?: "PriceRating"
  /** The daily prices of today and the previous 30 days */
  daily: PriceRatingType
  /** The hourly prices of today, the previous 7 days, and tomorrow */
  hourly: PriceRatingType
  /** The monthly prices of this month and the previous 31 months */
  monthly: PriceRatingType
  /** The different 'high'/'low' price breakpoints (market dependent) */
  thresholdPercentages: PriceRatingThresholdPercentages
}

export type PriceRatingEntry = {
  __typename?: "PriceRatingEntry"
  /** The percentage difference compared to the trailing price average (1 day for 'hourly', 30 days for 'daily' and 32 months for 'monthly') */
  difference: Scalars["Float"]["output"]
  /** Nord Pool spot price */
  energy: Scalars["Float"]["output"]
  /** The price level compared to recent price values (calculated using 'difference' and 'priceRating.thresholdPercentages') */
  level: PriceRatingLevel
  /** The tax part of the price (guarantee of origin certificate, energy tax (Sweden only) and VAT) */
  tax: Scalars["Float"]["output"]
  /** The start time of the price */
  time: Scalars["String"]["output"]
  /** The total price (incl. tax) */
  total: Scalars["Float"]["output"]
}

export enum PriceRatingLevel {
  /** The price is within the range of what is considered being high (market dependent; see 'priceRating.thresholdPercentages' for limits) */
  High = "HIGH",
  /** The price is within the range of what is considered being low (market dependent; see 'priceRating.thresholdPercentages' for limits) */
  Low = "LOW",
  /** The price is within the range of what is considered being normal (market dependent; see 'priceRating.thresholdPercentages' for limits) */
  Normal = "NORMAL",
}

export type PriceRatingThresholdPercentages = {
  __typename?: "PriceRatingThresholdPercentages"
  /** The percentage difference when the price is considered to be 'high' (market dependent) */
  high: Scalars["Float"]["output"]
  /** The percentage difference when the price is considered to be 'low' (market dependent) */
  low: Scalars["Float"]["output"]
}

export type PriceRatingType = {
  __typename?: "PriceRatingType"
  /** The price currency */
  currency: Scalars["String"]["output"]
  /** The individual price entries aggregated by hourly/daily/monthly values */
  entries: Array<PriceRatingEntry>
  /** Highest Nord Pool spot price over the time period */
  maxEnergy: Scalars["Float"]["output"]
  /** Highest total price (incl. tax) over the time period */
  maxTotal: Scalars["Float"]["output"]
  /** Lowest Nord Pool spot price over the time period */
  minEnergy: Scalars["Float"]["output"]
  /** Lowest total price (incl. tax) over the time period */
  minTotal: Scalars["Float"]["output"]
}

export enum PriceResolution {
  Daily = "DAILY",
  Hourly = "HOURLY",
}

export type Production = {
  __typename?: "Production"
  /** The cost currency */
  currency?: Maybe<Scalars["String"]["output"]>
  from: Scalars["String"]["output"]
  /** kWh produced */
  production?: Maybe<Scalars["Float"]["output"]>
  productionUnit?: Maybe<Scalars["String"]["output"]>
  /** Total profit of the production */
  profit?: Maybe<Scalars["Float"]["output"]>
  to: Scalars["String"]["output"]
  unitPrice?: Maybe<Scalars["Float"]["output"]>
  unitPriceVAT?: Maybe<Scalars["Float"]["output"]>
}

export type PushNotificationInput = {
  message: Scalars["String"]["input"]
  screenToOpen?: InputMaybe<AppScreen>
  title?: InputMaybe<Scalars["String"]["input"]>
}

export type PushNotificationResponse = {
  __typename?: "PushNotificationResponse"
  pushedToNumberOfDevices: Scalars["Int"]["output"]
  successful: Scalars["Boolean"]["output"]
}

export type Query = {
  __typename?: "Query"
  /** This contains data about the logged-in user */
  viewer: Viewer
}

export type RootMutation = {
  __typename?: "RootMutation"
  /** Send meter reading for home (only available for Norwegian users) */
  sendMeterReading: MeterReadingResponse
  /** Send notification to Tibber app on registered devices */
  sendPushNotification: PushNotificationResponse
  /** Update home information */
  updateHome: Home
}

export type RootMutationSendMeterReadingArgs = {
  input: MeterReadingInput
}

export type RootMutationSendPushNotificationArgs = {
  input: PushNotificationInput
}

export type RootMutationUpdateHomeArgs = {
  input: UpdateHomeInput
}

export type RootSubscription = {
  __typename?: "RootSubscription"
  /** Subscribe to real-time measurement stream from Pulse or Watty device */
  liveMeasurement?: Maybe<LiveMeasurement>
  /** Subscribe to test stream */
  testMeasurement?: Maybe<LiveMeasurement>
}

export type RootSubscriptionLiveMeasurementArgs = {
  homeId: Scalars["ID"]["input"]
}

export type RootSubscriptionTestMeasurementArgs = {
  homeId: Scalars["ID"]["input"]
}

export type Subscription = {
  __typename?: "Subscription"
  id: Scalars["ID"]["output"]
  /** Price information related to the subscription */
  priceInfo?: Maybe<PriceInfo>
  /** Price information related to the subscription */
  priceRating?: Maybe<PriceRating>
  /** The current status of the subscription */
  status?: Maybe<Scalars["String"]["output"]>
  /** @deprecated no longer available. */
  statusReason?: Maybe<Scalars["String"]["output"]>
  /** The owner of the subscription */
  subscriber: LegalEntity
  /** The time the subscription started */
  validFrom?: Maybe<Scalars["String"]["output"]>
  /** The time the subscription ended */
  validTo?: Maybe<Scalars["String"]["output"]>
}

export type SubscriptionPriceConnection = {
  __typename?: "SubscriptionPriceConnection"
  edges: Array<Maybe<SubscriptionPriceEdge>>
  nodes: Array<Maybe<Price>>
  pageInfo: SubscriptionPriceConnectionPageInfo
}

export type SubscriptionPriceConnectionPageInfo = PageInfo & {
  __typename?: "SubscriptionPriceConnectionPageInfo"
  count: Scalars["Int"]["output"]
  currency: Scalars["String"]["output"]
  endCursor?: Maybe<Scalars["String"]["output"]>
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>
  maxEnergy?: Maybe<Scalars["Float"]["output"]>
  maxTotal?: Maybe<Scalars["Float"]["output"]>
  minEnergy?: Maybe<Scalars["Float"]["output"]>
  minTotal?: Maybe<Scalars["Float"]["output"]>
  precision?: Maybe<Scalars["String"]["output"]>
  resolution: Scalars["String"]["output"]
  startCursor?: Maybe<Scalars["String"]["output"]>
}

export type SubscriptionPriceEdge = {
  __typename?: "SubscriptionPriceEdge"
  /** The global ID of the element */
  cursor: Scalars["String"]["output"]
  /** A single price node */
  node?: Maybe<Price>
}

export type UpdateHomeInput = {
  /** The chosen avatar for the home */
  appAvatar?: InputMaybe<HomeAvatar>
  appNickname?: InputMaybe<Scalars["String"]["input"]>
  /** Whether the home has a ventilation system */
  hasVentilationSystem?: InputMaybe<Scalars["Boolean"]["input"]>
  homeId: Scalars["ID"]["input"]
  /** The main fuse size */
  mainFuseSize?: InputMaybe<Scalars["Int"]["input"]>
  /** The number of people living in the home */
  numberOfResidents?: InputMaybe<Scalars["Int"]["input"]>
  /** The primary form of heating in the household */
  primaryHeatingSource?: InputMaybe<HeatingSource>
  /** The size of the home in square meters */
  size?: InputMaybe<Scalars["Int"]["input"]>
  /** The type of home. */
  type?: InputMaybe<HomeType>
}

export type Viewer = {
  __typename?: "Viewer"
  /** The type of account for the logged-in user. */
  accountType: Array<Scalars["String"]["output"]>
  /** Single home by its ID */
  home: Home
  /** All homes visible to the logged-in user */
  homes: Array<Maybe<Home>>
  login?: Maybe<Scalars["String"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  /** Unique user identifier */
  userId?: Maybe<Scalars["String"]["output"]>
  /** URL for websocket subscriptions */
  websocketSubscriptionUrl?: Maybe<Scalars["String"]["output"]>
}

export type ViewerHomeArgs = {
  id: Scalars["ID"]["input"]
}

export type GetTibberPricesQueryVariables = Exact<{ [key: string]: never }>

export type GetTibberPricesQuery = {
  __typename?: "Query"
  viewer: {
    __typename?: "Viewer"
    homes: Array<{
      __typename?: "Home"
      currentSubscription?: {
        __typename?: "Subscription"
        priceInfo?: {
          __typename?: "PriceInfo"
          today: Array<{
            __typename?: "Price"
            total?: number | null
            startsAt?: string | null
          } | null>
          tomorrow: Array<{
            __typename?: "Price"
            total?: number | null
            startsAt?: string | null
          } | null>
        } | null
      } | null
    } | null>
  }
}

export const GetTibberPricesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTibberPrices" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "homes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "currentSubscription" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priceInfo" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "today" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "total",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "startsAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tomorrow" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "total",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "startsAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTibberPricesQuery,
  GetTibberPricesQueryVariables
>
