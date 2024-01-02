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
import type { CiWorkflow } from './CiWorkflow';
import {
    CiWorkflowFromJSON,
    CiWorkflowFromJSONTyped,
    CiWorkflowToJSON,
} from './CiWorkflow';
import type { CiWorkflowsResponseIncludedInner } from './CiWorkflowsResponseIncludedInner';
import {
    CiWorkflowsResponseIncludedInnerFromJSON,
    CiWorkflowsResponseIncludedInnerFromJSONTyped,
    CiWorkflowsResponseIncludedInnerToJSON,
} from './CiWorkflowsResponseIncludedInner';
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
 * @interface CiWorkflowsResponse
 */
export interface CiWorkflowsResponse {
    /**
     * 
     * @type {Array<CiWorkflow>}
     * @memberof CiWorkflowsResponse
     */
    data: Array<CiWorkflow>;
    /**
     * 
     * @type {Array<CiWorkflowsResponseIncludedInner>}
     * @memberof CiWorkflowsResponse
     */
    included?: Array<CiWorkflowsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof CiWorkflowsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiWorkflowsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiWorkflowsResponse interface.
 */
export function instanceOfCiWorkflowsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiWorkflowsResponseFromJSON(json: any): CiWorkflowsResponse {
    return CiWorkflowsResponseFromJSONTyped(json, false);
}

export function CiWorkflowsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CiWorkflowFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(CiWorkflowsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function CiWorkflowsResponseToJSON(value?: CiWorkflowsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(CiWorkflowToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(CiWorkflowsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

