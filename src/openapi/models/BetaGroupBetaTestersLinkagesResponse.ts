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
import type { BetaGroupRelationshipsBetaTestersDataInner } from './BetaGroupRelationshipsBetaTestersDataInner';
import {
    BetaGroupRelationshipsBetaTestersDataInnerFromJSON,
    BetaGroupRelationshipsBetaTestersDataInnerFromJSONTyped,
    BetaGroupRelationshipsBetaTestersDataInnerToJSON,
} from './BetaGroupRelationshipsBetaTestersDataInner';
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
 * @interface BetaGroupBetaTestersLinkagesResponse
 */
export interface BetaGroupBetaTestersLinkagesResponse {
    /**
     * 
     * @type {Array<BetaGroupRelationshipsBetaTestersDataInner>}
     * @memberof BetaGroupBetaTestersLinkagesResponse
     */
    data: Array<BetaGroupRelationshipsBetaTestersDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaGroupBetaTestersLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaGroupBetaTestersLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaGroupBetaTestersLinkagesResponse interface.
 */
export function instanceOfBetaGroupBetaTestersLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaGroupBetaTestersLinkagesResponseFromJSON(json: any): BetaGroupBetaTestersLinkagesResponse {
    return BetaGroupBetaTestersLinkagesResponseFromJSONTyped(json, false);
}

export function BetaGroupBetaTestersLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupBetaTestersLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaGroupBetaTestersLinkagesResponseToJSON(value?: BetaGroupBetaTestersLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

