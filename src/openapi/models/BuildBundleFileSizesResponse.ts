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
import type { BuildBundleFileSize } from './BuildBundleFileSize';
import {
    BuildBundleFileSizeFromJSON,
    BuildBundleFileSizeFromJSONTyped,
    BuildBundleFileSizeToJSON,
} from './BuildBundleFileSize';
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
 * @interface BuildBundleFileSizesResponse
 */
export interface BuildBundleFileSizesResponse {
    /**
     * 
     * @type {Array<BuildBundleFileSize>}
     * @memberof BuildBundleFileSizesResponse
     */
    data: Array<BuildBundleFileSize>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BuildBundleFileSizesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildBundleFileSizesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BuildBundleFileSizesResponse interface.
 */
export function instanceOfBuildBundleFileSizesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BuildBundleFileSizesResponseFromJSON(json: any): BuildBundleFileSizesResponse {
    return BuildBundleFileSizesResponseFromJSONTyped(json, false);
}

export function BuildBundleFileSizesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleFileSizesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BuildBundleFileSizeFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BuildBundleFileSizesResponseToJSON(value?: BuildBundleFileSizesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BuildBundleFileSizeToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

