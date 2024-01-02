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
/**
 * 
 * @export
 * @interface AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner
 */
export interface AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner
     */
    type: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum = {
    TerritoryAvailabilities: 'territoryAvailabilities'
} as const;
export type AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum = typeof AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum[keyof typeof AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerTypeEnum];


/**
 * Check if a given object implements the AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner interface.
 */
export function instanceOfAppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerFromJSON(json: any): AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner {
    return AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerFromJSONTyped(json, false);
}

export function AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInnerToJSON(value?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

