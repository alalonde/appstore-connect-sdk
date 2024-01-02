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
import type { PromotedPurchase } from './PromotedPurchase';
import {
    PromotedPurchaseFromJSON,
    PromotedPurchaseFromJSONTyped,
    PromotedPurchaseToJSON,
} from './PromotedPurchase';
import type { PromotedPurchasesResponseIncludedInner } from './PromotedPurchasesResponseIncludedInner';
import {
    PromotedPurchasesResponseIncludedInnerFromJSON,
    PromotedPurchasesResponseIncludedInnerFromJSONTyped,
    PromotedPurchasesResponseIncludedInnerToJSON,
} from './PromotedPurchasesResponseIncludedInner';

/**
 * 
 * @export
 * @interface PromotedPurchasesResponse
 */
export interface PromotedPurchasesResponse {
    /**
     * 
     * @type {Array<PromotedPurchase>}
     * @memberof PromotedPurchasesResponse
     */
    data: Array<PromotedPurchase>;
    /**
     * 
     * @type {Array<PromotedPurchasesResponseIncludedInner>}
     * @memberof PromotedPurchasesResponse
     */
    included?: Array<PromotedPurchasesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof PromotedPurchasesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof PromotedPurchasesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the PromotedPurchasesResponse interface.
 */
export function instanceOfPromotedPurchasesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function PromotedPurchasesResponseFromJSON(json: any): PromotedPurchasesResponse {
    return PromotedPurchasesResponseFromJSONTyped(json, false);
}

export function PromotedPurchasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchasesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(PromotedPurchaseFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(PromotedPurchasesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function PromotedPurchasesResponseToJSON(value?: PromotedPurchasesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(PromotedPurchaseToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(PromotedPurchasesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

