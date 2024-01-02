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
import type { AppRelationshipsPromotedPurchasesDataInner } from './AppRelationshipsPromotedPurchasesDataInner';
import {
    AppRelationshipsPromotedPurchasesDataInnerFromJSON,
    AppRelationshipsPromotedPurchasesDataInnerFromJSONTyped,
    AppRelationshipsPromotedPurchasesDataInnerToJSON,
} from './AppRelationshipsPromotedPurchasesDataInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppPromotedPurchasesLinkagesResponse
 */
export interface AppPromotedPurchasesLinkagesResponse {
    /**
     * 
     * @type {Array<AppRelationshipsPromotedPurchasesDataInner>}
     * @memberof AppPromotedPurchasesLinkagesResponse
     */
    data: Array<AppRelationshipsPromotedPurchasesDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppPromotedPurchasesLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppPromotedPurchasesLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppPromotedPurchasesLinkagesResponse interface.
 */
export function instanceOfAppPromotedPurchasesLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPromotedPurchasesLinkagesResponseFromJSON(json: any): AppPromotedPurchasesLinkagesResponse {
    return AppPromotedPurchasesLinkagesResponseFromJSONTyped(json, false);
}

export function AppPromotedPurchasesLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPromotedPurchasesLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppRelationshipsPromotedPurchasesDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppPromotedPurchasesLinkagesResponseToJSON(value?: AppPromotedPurchasesLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppRelationshipsPromotedPurchasesDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

