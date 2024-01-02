/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory } from './InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory';
import {
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON,
} from './InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory';
import type { SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription } from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';
import {
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSONTyped,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON,
} from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';
import type { SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint } from './SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint';
import {
    SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointFromJSON,
    SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointFromJSONTyped,
    SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointToJSON,
} from './SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint';

/**
 * 
 * @export
 * @interface SubscriptionIntroductoryOfferCreateRequestDataRelationships
 */
export interface SubscriptionIntroductoryOfferCreateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription}
     * @memberof SubscriptionIntroductoryOfferCreateRequestDataRelationships
     */
    subscription: SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription;
    /**
     * 
     * @type {InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory}
     * @memberof SubscriptionIntroductoryOfferCreateRequestDataRelationships
     */
    territory?: InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory;
    /**
     * 
     * @type {SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint}
     * @memberof SubscriptionIntroductoryOfferCreateRequestDataRelationships
     */
    subscriptionPricePoint?: SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferCreateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionIntroductoryOfferCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subscription" in value;

    return isInstance;
}

export function SubscriptionIntroductoryOfferCreateRequestDataRelationshipsFromJSON(json: any): SubscriptionIntroductoryOfferCreateRequestDataRelationships {
    return SubscriptionIntroductoryOfferCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON(json['subscription']),
        'territory': !exists(json, 'territory') ? undefined : InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON(json['territory']),
        'subscriptionPricePoint': !exists(json, 'subscriptionPricePoint') ? undefined : SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointFromJSON(json['subscriptionPricePoint']),
    };
}

export function SubscriptionIntroductoryOfferCreateRequestDataRelationshipsToJSON(value?: SubscriptionIntroductoryOfferCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON(value.subscription),
        'territory': InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON(value.territory),
        'subscriptionPricePoint': SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointToJSON(value.subscriptionPricePoint),
    };
}

