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
import type { ScmProvider } from './ScmProvider';
import {
    ScmProviderFromJSON,
    ScmProviderFromJSONTyped,
    ScmProviderToJSON,
} from './ScmProvider';

/**
 * 
 * @export
 * @interface ScmProvidersResponse
 */
export interface ScmProvidersResponse {
    /**
     * 
     * @type {Array<ScmProvider>}
     * @memberof ScmProvidersResponse
     */
    data: Array<ScmProvider>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ScmProvidersResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ScmProvidersResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ScmProvidersResponse interface.
 */
export function instanceOfScmProvidersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ScmProvidersResponseFromJSON(json: any): ScmProvidersResponse {
    return ScmProvidersResponseFromJSONTyped(json, false);
}

export function ScmProvidersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmProvidersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ScmProviderFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ScmProvidersResponseToJSON(value?: ScmProvidersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ScmProviderToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

