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
import type { AppPreviewSet } from './AppPreviewSet';
import {
    AppPreviewSetFromJSON,
    AppPreviewSetFromJSONTyped,
    AppPreviewSetToJSON,
} from './AppPreviewSet';
import type { AppPreviewSetsResponseIncludedInner } from './AppPreviewSetsResponseIncludedInner';
import {
    AppPreviewSetsResponseIncludedInnerFromJSON,
    AppPreviewSetsResponseIncludedInnerFromJSONTyped,
    AppPreviewSetsResponseIncludedInnerToJSON,
} from './AppPreviewSetsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppPreviewSetResponse
 */
export interface AppPreviewSetResponse {
    /**
     * 
     * @type {AppPreviewSet}
     * @memberof AppPreviewSetResponse
     */
    data: AppPreviewSet;
    /**
     * 
     * @type {Array<AppPreviewSetsResponseIncludedInner>}
     * @memberof AppPreviewSetResponse
     */
    included?: Array<AppPreviewSetsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppPreviewSetResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppPreviewSetResponse interface.
 */
export function instanceOfAppPreviewSetResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPreviewSetResponseFromJSON(json: any): AppPreviewSetResponse {
    return AppPreviewSetResponseFromJSONTyped(json, false);
}

export function AppPreviewSetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPreviewSetFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppPreviewSetsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppPreviewSetResponseToJSON(value?: AppPreviewSetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPreviewSetToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppPreviewSetsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

