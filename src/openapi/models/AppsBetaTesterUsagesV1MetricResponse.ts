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
import type { AppsBetaTesterUsagesV1MetricResponseDataInner } from './AppsBetaTesterUsagesV1MetricResponseDataInner';
import {
    AppsBetaTesterUsagesV1MetricResponseDataInnerFromJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerFromJSONTyped,
    AppsBetaTesterUsagesV1MetricResponseDataInnerToJSON,
} from './AppsBetaTesterUsagesV1MetricResponseDataInner';
import type { BetaTester } from './BetaTester';
import {
    BetaTesterFromJSON,
    BetaTesterFromJSONTyped,
    BetaTesterToJSON,
} from './BetaTester';
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
 * @interface AppsBetaTesterUsagesV1MetricResponse
 */
export interface AppsBetaTesterUsagesV1MetricResponse {
    /**
     * 
     * @type {Array<AppsBetaTesterUsagesV1MetricResponseDataInner>}
     * @memberof AppsBetaTesterUsagesV1MetricResponse
     */
    data: Array<AppsBetaTesterUsagesV1MetricResponseDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppsBetaTesterUsagesV1MetricResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppsBetaTesterUsagesV1MetricResponse
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<BetaTester>}
     * @memberof AppsBetaTesterUsagesV1MetricResponse
     */
    included?: Array<BetaTester>;
}

/**
 * Check if a given object implements the AppsBetaTesterUsagesV1MetricResponse interface.
 */
export function instanceOfAppsBetaTesterUsagesV1MetricResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppsBetaTesterUsagesV1MetricResponseFromJSON(json: any): AppsBetaTesterUsagesV1MetricResponse {
    return AppsBetaTesterUsagesV1MetricResponseFromJSONTyped(json, false);
}

export function AppsBetaTesterUsagesV1MetricResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppsBetaTesterUsagesV1MetricResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppsBetaTesterUsagesV1MetricResponseDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(BetaTesterFromJSON)),
    };
}

export function AppsBetaTesterUsagesV1MetricResponseToJSON(value?: AppsBetaTesterUsagesV1MetricResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppsBetaTesterUsagesV1MetricResponseDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(BetaTesterToJSON)),
    };
}

