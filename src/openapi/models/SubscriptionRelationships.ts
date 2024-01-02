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
import type { InAppPurchaseV2RelationshipsPromotedPurchase } from './InAppPurchaseV2RelationshipsPromotedPurchase';
import {
    InAppPurchaseV2RelationshipsPromotedPurchaseFromJSON,
    InAppPurchaseV2RelationshipsPromotedPurchaseFromJSONTyped,
    InAppPurchaseV2RelationshipsPromotedPurchaseToJSON,
} from './InAppPurchaseV2RelationshipsPromotedPurchase';
import type { SubscriptionGroupLocalizationRelationshipsSubscriptionGroup } from './SubscriptionGroupLocalizationRelationshipsSubscriptionGroup';
import {
    SubscriptionGroupLocalizationRelationshipsSubscriptionGroupFromJSON,
    SubscriptionGroupLocalizationRelationshipsSubscriptionGroupFromJSONTyped,
    SubscriptionGroupLocalizationRelationshipsSubscriptionGroupToJSON,
} from './SubscriptionGroupLocalizationRelationshipsSubscriptionGroup';
import type { SubscriptionRelationshipsAppStoreReviewScreenshot } from './SubscriptionRelationshipsAppStoreReviewScreenshot';
import {
    SubscriptionRelationshipsAppStoreReviewScreenshotFromJSON,
    SubscriptionRelationshipsAppStoreReviewScreenshotFromJSONTyped,
    SubscriptionRelationshipsAppStoreReviewScreenshotToJSON,
} from './SubscriptionRelationshipsAppStoreReviewScreenshot';
import type { SubscriptionRelationshipsIntroductoryOffers } from './SubscriptionRelationshipsIntroductoryOffers';
import {
    SubscriptionRelationshipsIntroductoryOffersFromJSON,
    SubscriptionRelationshipsIntroductoryOffersFromJSONTyped,
    SubscriptionRelationshipsIntroductoryOffersToJSON,
} from './SubscriptionRelationshipsIntroductoryOffers';
import type { SubscriptionRelationshipsOfferCodes } from './SubscriptionRelationshipsOfferCodes';
import {
    SubscriptionRelationshipsOfferCodesFromJSON,
    SubscriptionRelationshipsOfferCodesFromJSONTyped,
    SubscriptionRelationshipsOfferCodesToJSON,
} from './SubscriptionRelationshipsOfferCodes';
import type { SubscriptionRelationshipsPrices } from './SubscriptionRelationshipsPrices';
import {
    SubscriptionRelationshipsPricesFromJSON,
    SubscriptionRelationshipsPricesFromJSONTyped,
    SubscriptionRelationshipsPricesToJSON,
} from './SubscriptionRelationshipsPrices';
import type { SubscriptionRelationshipsPromotionalOffers } from './SubscriptionRelationshipsPromotionalOffers';
import {
    SubscriptionRelationshipsPromotionalOffersFromJSON,
    SubscriptionRelationshipsPromotionalOffersFromJSONTyped,
    SubscriptionRelationshipsPromotionalOffersToJSON,
} from './SubscriptionRelationshipsPromotionalOffers';
import type { SubscriptionRelationshipsSubscriptionAvailability } from './SubscriptionRelationshipsSubscriptionAvailability';
import {
    SubscriptionRelationshipsSubscriptionAvailabilityFromJSON,
    SubscriptionRelationshipsSubscriptionAvailabilityFromJSONTyped,
    SubscriptionRelationshipsSubscriptionAvailabilityToJSON,
} from './SubscriptionRelationshipsSubscriptionAvailability';
import type { SubscriptionRelationshipsSubscriptionLocalizations } from './SubscriptionRelationshipsSubscriptionLocalizations';
import {
    SubscriptionRelationshipsSubscriptionLocalizationsFromJSON,
    SubscriptionRelationshipsSubscriptionLocalizationsFromJSONTyped,
    SubscriptionRelationshipsSubscriptionLocalizationsToJSON,
} from './SubscriptionRelationshipsSubscriptionLocalizations';

/**
 * 
 * @export
 * @interface SubscriptionRelationships
 */
export interface SubscriptionRelationships {
    /**
     * 
     * @type {SubscriptionRelationshipsSubscriptionLocalizations}
     * @memberof SubscriptionRelationships
     */
    subscriptionLocalizations?: SubscriptionRelationshipsSubscriptionLocalizations;
    /**
     * 
     * @type {SubscriptionRelationshipsAppStoreReviewScreenshot}
     * @memberof SubscriptionRelationships
     */
    appStoreReviewScreenshot?: SubscriptionRelationshipsAppStoreReviewScreenshot;
    /**
     * 
     * @type {SubscriptionGroupLocalizationRelationshipsSubscriptionGroup}
     * @memberof SubscriptionRelationships
     */
    group?: SubscriptionGroupLocalizationRelationshipsSubscriptionGroup;
    /**
     * 
     * @type {SubscriptionRelationshipsIntroductoryOffers}
     * @memberof SubscriptionRelationships
     */
    introductoryOffers?: SubscriptionRelationshipsIntroductoryOffers;
    /**
     * 
     * @type {SubscriptionRelationshipsPromotionalOffers}
     * @memberof SubscriptionRelationships
     */
    promotionalOffers?: SubscriptionRelationshipsPromotionalOffers;
    /**
     * 
     * @type {SubscriptionRelationshipsOfferCodes}
     * @memberof SubscriptionRelationships
     */
    offerCodes?: SubscriptionRelationshipsOfferCodes;
    /**
     * 
     * @type {SubscriptionRelationshipsPrices}
     * @memberof SubscriptionRelationships
     */
    prices?: SubscriptionRelationshipsPrices;
    /**
     * 
     * @type {InAppPurchaseV2RelationshipsPromotedPurchase}
     * @memberof SubscriptionRelationships
     */
    promotedPurchase?: InAppPurchaseV2RelationshipsPromotedPurchase;
    /**
     * 
     * @type {SubscriptionRelationshipsSubscriptionAvailability}
     * @memberof SubscriptionRelationships
     */
    subscriptionAvailability?: SubscriptionRelationshipsSubscriptionAvailability;
}

/**
 * Check if a given object implements the SubscriptionRelationships interface.
 */
export function instanceOfSubscriptionRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionRelationshipsFromJSON(json: any): SubscriptionRelationships {
    return SubscriptionRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriptionLocalizations': !exists(json, 'subscriptionLocalizations') ? undefined : SubscriptionRelationshipsSubscriptionLocalizationsFromJSON(json['subscriptionLocalizations']),
        'appStoreReviewScreenshot': !exists(json, 'appStoreReviewScreenshot') ? undefined : SubscriptionRelationshipsAppStoreReviewScreenshotFromJSON(json['appStoreReviewScreenshot']),
        'group': !exists(json, 'group') ? undefined : SubscriptionGroupLocalizationRelationshipsSubscriptionGroupFromJSON(json['group']),
        'introductoryOffers': !exists(json, 'introductoryOffers') ? undefined : SubscriptionRelationshipsIntroductoryOffersFromJSON(json['introductoryOffers']),
        'promotionalOffers': !exists(json, 'promotionalOffers') ? undefined : SubscriptionRelationshipsPromotionalOffersFromJSON(json['promotionalOffers']),
        'offerCodes': !exists(json, 'offerCodes') ? undefined : SubscriptionRelationshipsOfferCodesFromJSON(json['offerCodes']),
        'prices': !exists(json, 'prices') ? undefined : SubscriptionRelationshipsPricesFromJSON(json['prices']),
        'promotedPurchase': !exists(json, 'promotedPurchase') ? undefined : InAppPurchaseV2RelationshipsPromotedPurchaseFromJSON(json['promotedPurchase']),
        'subscriptionAvailability': !exists(json, 'subscriptionAvailability') ? undefined : SubscriptionRelationshipsSubscriptionAvailabilityFromJSON(json['subscriptionAvailability']),
    };
}

export function SubscriptionRelationshipsToJSON(value?: SubscriptionRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscriptionLocalizations': SubscriptionRelationshipsSubscriptionLocalizationsToJSON(value.subscriptionLocalizations),
        'appStoreReviewScreenshot': SubscriptionRelationshipsAppStoreReviewScreenshotToJSON(value.appStoreReviewScreenshot),
        'group': SubscriptionGroupLocalizationRelationshipsSubscriptionGroupToJSON(value.group),
        'introductoryOffers': SubscriptionRelationshipsIntroductoryOffersToJSON(value.introductoryOffers),
        'promotionalOffers': SubscriptionRelationshipsPromotionalOffersToJSON(value.promotionalOffers),
        'offerCodes': SubscriptionRelationshipsOfferCodesToJSON(value.offerCodes),
        'prices': SubscriptionRelationshipsPricesToJSON(value.prices),
        'promotedPurchase': InAppPurchaseV2RelationshipsPromotedPurchaseToJSON(value.promotedPurchase),
        'subscriptionAvailability': SubscriptionRelationshipsSubscriptionAvailabilityToJSON(value.subscriptionAvailability),
    };
}

