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
import type { AppAvailabilityRelationshipsApp } from './AppAvailabilityRelationshipsApp';
import {
    AppAvailabilityRelationshipsAppFromJSON,
    AppAvailabilityRelationshipsAppFromJSONTyped,
    AppAvailabilityRelationshipsAppToJSON,
} from './AppAvailabilityRelationshipsApp';

/**
 * 
 * @export
 * @interface AppPreOrderRelationships
 */
export interface AppPreOrderRelationships {
    /**
     * 
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof AppPreOrderRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
}

/**
 * Check if a given object implements the AppPreOrderRelationships interface.
 */
export function instanceOfAppPreOrderRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreOrderRelationshipsFromJSON(json: any): AppPreOrderRelationships {
    return AppPreOrderRelationshipsFromJSONTyped(json, false);
}

export function AppPreOrderRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : AppAvailabilityRelationshipsAppFromJSON(json['app']),
    };
}

export function AppPreOrderRelationshipsToJSON(value?: AppPreOrderRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AppAvailabilityRelationshipsAppToJSON(value.app),
    };
}

