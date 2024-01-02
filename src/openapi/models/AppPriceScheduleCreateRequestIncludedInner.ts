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
    AppPriceV2InlineCreate,
    instanceOfAppPriceV2InlineCreate,
    AppPriceV2InlineCreateFromJSON,
    AppPriceV2InlineCreateFromJSONTyped,
    AppPriceV2InlineCreateToJSON,
} from './AppPriceV2InlineCreate';
import {
    TerritoryInlineCreate,
    instanceOfTerritoryInlineCreate,
    TerritoryInlineCreateFromJSON,
    TerritoryInlineCreateFromJSONTyped,
    TerritoryInlineCreateToJSON,
} from './TerritoryInlineCreate';

/**
 * @type AppPriceScheduleCreateRequestIncludedInner
 * 
 * @export
 */
export type AppPriceScheduleCreateRequestIncludedInner = AppPriceV2InlineCreate | TerritoryInlineCreate;

export function AppPriceScheduleCreateRequestIncludedInnerFromJSON(json: any): AppPriceScheduleCreateRequestIncludedInner {
    return AppPriceScheduleCreateRequestIncludedInnerFromJSONTyped(json, false);
}

export function AppPriceScheduleCreateRequestIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleCreateRequestIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppPriceV2InlineCreateFromJSONTyped(json, true), ...TerritoryInlineCreateFromJSONTyped(json, true) };
}

export function AppPriceScheduleCreateRequestIncludedInnerToJSON(value?: AppPriceScheduleCreateRequestIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppPriceV2InlineCreate(value)) {
        return AppPriceV2InlineCreateToJSON(value as AppPriceV2InlineCreate);
    }
    if (instanceOfTerritoryInlineCreate(value)) {
        return TerritoryInlineCreateToJSON(value as TerritoryInlineCreate);
    }

    return {};
}

