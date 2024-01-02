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
import type { SandboxTesterV2 } from './SandboxTesterV2';
import {
    SandboxTesterV2FromJSON,
    SandboxTesterV2FromJSONTyped,
    SandboxTesterV2ToJSON,
} from './SandboxTesterV2';

/**
 * 
 * @export
 * @interface SandboxTestersV2Response
 */
export interface SandboxTestersV2Response {
    /**
     * 
     * @type {Array<SandboxTesterV2>}
     * @memberof SandboxTestersV2Response
     */
    data: Array<SandboxTesterV2>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SandboxTestersV2Response
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SandboxTestersV2Response
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SandboxTestersV2Response interface.
 */
export function instanceOfSandboxTestersV2Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SandboxTestersV2ResponseFromJSON(json: any): SandboxTestersV2Response {
    return SandboxTestersV2ResponseFromJSONTyped(json, false);
}

export function SandboxTestersV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersV2Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SandboxTesterV2FromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SandboxTestersV2ResponseToJSON(value?: SandboxTestersV2Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SandboxTesterV2ToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

