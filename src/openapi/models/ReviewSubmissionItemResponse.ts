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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { ReviewSubmissionItem } from './ReviewSubmissionItem';
import {
    ReviewSubmissionItemFromJSON,
    ReviewSubmissionItemFromJSONTyped,
    ReviewSubmissionItemToJSON,
} from './ReviewSubmissionItem';
import type { ReviewSubmissionItemsResponseIncludedInner } from './ReviewSubmissionItemsResponseIncludedInner';
import {
    ReviewSubmissionItemsResponseIncludedInnerFromJSON,
    ReviewSubmissionItemsResponseIncludedInnerFromJSONTyped,
    ReviewSubmissionItemsResponseIncludedInnerToJSON,
} from './ReviewSubmissionItemsResponseIncludedInner';

/**
 * 
 * @export
 * @interface ReviewSubmissionItemResponse
 */
export interface ReviewSubmissionItemResponse {
    /**
     * 
     * @type {ReviewSubmissionItem}
     * @memberof ReviewSubmissionItemResponse
     */
    data: ReviewSubmissionItem;
    /**
     * 
     * @type {Array<ReviewSubmissionItemsResponseIncludedInner>}
     * @memberof ReviewSubmissionItemResponse
     */
    included?: Array<ReviewSubmissionItemsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof ReviewSubmissionItemResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ReviewSubmissionItemResponse interface.
 */
export function instanceOfReviewSubmissionItemResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ReviewSubmissionItemResponseFromJSON(json: any): ReviewSubmissionItemResponse {
    return ReviewSubmissionItemResponseFromJSONTyped(json, false);
}

export function ReviewSubmissionItemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ReviewSubmissionItemFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(ReviewSubmissionItemsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function ReviewSubmissionItemResponseToJSON(value?: ReviewSubmissionItemResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ReviewSubmissionItemToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(ReviewSubmissionItemsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

