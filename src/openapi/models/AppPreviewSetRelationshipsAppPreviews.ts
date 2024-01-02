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
import type { AppPreviewSetRelationshipsAppPreviewsDataInner } from './AppPreviewSetRelationshipsAppPreviewsDataInner';
import {
    AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSON,
    AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSONTyped,
    AppPreviewSetRelationshipsAppPreviewsDataInnerToJSON,
} from './AppPreviewSetRelationshipsAppPreviewsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppPreviewSetRelationshipsAppPreviews
 */
export interface AppPreviewSetRelationshipsAppPreviews {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof AppPreviewSetRelationshipsAppPreviews
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppPreviewSetRelationshipsAppPreviews
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppPreviewSetRelationshipsAppPreviewsDataInner>}
     * @memberof AppPreviewSetRelationshipsAppPreviews
     */
    data?: Array<AppPreviewSetRelationshipsAppPreviewsDataInner>;
}

/**
 * Check if a given object implements the AppPreviewSetRelationshipsAppPreviews interface.
 */
export function instanceOfAppPreviewSetRelationshipsAppPreviews(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreviewSetRelationshipsAppPreviewsFromJSON(json: any): AppPreviewSetRelationshipsAppPreviews {
    return AppPreviewSetRelationshipsAppPreviewsFromJSONTyped(json, false);
}

export function AppPreviewSetRelationshipsAppPreviewsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetRelationshipsAppPreviews {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSON)),
    };
}

export function AppPreviewSetRelationshipsAppPreviewsToJSON(value?: AppPreviewSetRelationshipsAppPreviews | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppPreviewSetRelationshipsAppPreviewsDataInnerToJSON)),
    };
}

