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
import type { AppClipDomainStatus } from './AppClipDomainStatus';
import {
    AppClipDomainStatusFromJSON,
    AppClipDomainStatusFromJSONTyped,
    AppClipDomainStatusToJSON,
} from './AppClipDomainStatus';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppClipDomainStatusResponse
 */
export interface AppClipDomainStatusResponse {
    /**
     * 
     * @type {AppClipDomainStatus}
     * @memberof AppClipDomainStatusResponse
     */
    data: AppClipDomainStatus;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppClipDomainStatusResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppClipDomainStatusResponse interface.
 */
export function instanceOfAppClipDomainStatusResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppClipDomainStatusResponseFromJSON(json: any): AppClipDomainStatusResponse {
    return AppClipDomainStatusResponseFromJSONTyped(json, false);
}

export function AppClipDomainStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDomainStatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipDomainStatusFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppClipDomainStatusResponseToJSON(value?: AppClipDomainStatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipDomainStatusToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

