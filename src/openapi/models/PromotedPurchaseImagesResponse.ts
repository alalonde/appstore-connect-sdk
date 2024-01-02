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
import type { PromotedPurchaseImage } from './PromotedPurchaseImage';
import {
    PromotedPurchaseImageFromJSON,
    PromotedPurchaseImageFromJSONTyped,
    PromotedPurchaseImageToJSON,
} from './PromotedPurchaseImage';

/**
 * 
 * @export
 * @interface PromotedPurchaseImagesResponse
 */
export interface PromotedPurchaseImagesResponse {
    /**
     * 
     * @type {Array<PromotedPurchaseImage>}
     * @memberof PromotedPurchaseImagesResponse
     */
    data: Array<PromotedPurchaseImage>;
    /**
     * 
     * @type {Array<PromotedPurchase>}
     * @memberof PromotedPurchaseImagesResponse
     */
    included?: Array<PromotedPurchase>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof PromotedPurchaseImagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof PromotedPurchaseImagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the PromotedPurchaseImagesResponse interface.
 */
export function instanceOfPromotedPurchaseImagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function PromotedPurchaseImagesResponseFromJSON(json: any): PromotedPurchaseImagesResponse {
    return PromotedPurchaseImagesResponseFromJSONTyped(json, false);
}

export function PromotedPurchaseImagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(PromotedPurchaseImageFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(PromotedPurchaseFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function PromotedPurchaseImagesResponseToJSON(value?: PromotedPurchaseImagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(PromotedPurchaseImageToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(PromotedPurchaseToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

