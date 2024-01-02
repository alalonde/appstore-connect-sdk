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

import {
    App,
    instanceOfApp,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import {
    Territory,
    instanceOfTerritory,
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * @type AppAvailabilityResponseIncludedInner
 * 
 * @export
 */
export type AppAvailabilityResponseIncludedInner = App | Territory;

export function AppAvailabilityResponseIncludedInnerFromJSON(json: any): AppAvailabilityResponseIncludedInner {
    return AppAvailabilityResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppAvailabilityResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppFromJSONTyped(json, true), ...TerritoryFromJSONTyped(json, true) };
}

export function AppAvailabilityResponseIncludedInnerToJSON(value?: AppAvailabilityResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfTerritory(value)) {
        return TerritoryToJSON(value as Territory);
    }

    return {};
}

