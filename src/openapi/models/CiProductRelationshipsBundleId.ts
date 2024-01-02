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
import type { AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks } from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import {
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSONTyped,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON,
} from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import type { BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData } from './BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData';
import {
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON,
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped,
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON,
} from './BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData';

/**
 * 
 * @export
 * @interface CiProductRelationshipsBundleId
 */
export interface CiProductRelationshipsBundleId {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof CiProductRelationshipsBundleId
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData}
     * @memberof CiProductRelationshipsBundleId
     */
    data?: BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData;
}

/**
 * Check if a given object implements the CiProductRelationshipsBundleId interface.
 */
export function instanceOfCiProductRelationshipsBundleId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiProductRelationshipsBundleIdFromJSON(json: any): CiProductRelationshipsBundleId {
    return CiProductRelationshipsBundleIdFromJSONTyped(json, false);
}

export function CiProductRelationshipsBundleIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductRelationshipsBundleId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON(json['data']),
    };
}

export function CiProductRelationshipsBundleIdToJSON(value?: CiProductRelationshipsBundleId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'data': BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON(value.data),
    };
}

