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
import type { AppEncryptionDeclaration } from './AppEncryptionDeclaration';
import {
    AppEncryptionDeclarationFromJSON,
    AppEncryptionDeclarationFromJSONTyped,
    AppEncryptionDeclarationToJSON,
} from './AppEncryptionDeclaration';
import type { AppEncryptionDeclarationsResponseIncludedInner } from './AppEncryptionDeclarationsResponseIncludedInner';
import {
    AppEncryptionDeclarationsResponseIncludedInnerFromJSON,
    AppEncryptionDeclarationsResponseIncludedInnerFromJSONTyped,
    AppEncryptionDeclarationsResponseIncludedInnerToJSON,
} from './AppEncryptionDeclarationsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationResponse
 */
export interface AppEncryptionDeclarationResponse {
    /**
     * 
     * @type {AppEncryptionDeclaration}
     * @memberof AppEncryptionDeclarationResponse
     */
    data: AppEncryptionDeclaration;
    /**
     * 
     * @type {Array<AppEncryptionDeclarationsResponseIncludedInner>}
     * @memberof AppEncryptionDeclarationResponse
     */
    included?: Array<AppEncryptionDeclarationsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppEncryptionDeclarationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationResponse interface.
 */
export function instanceOfAppEncryptionDeclarationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppEncryptionDeclarationResponseFromJSON(json: any): AppEncryptionDeclarationResponse {
    return AppEncryptionDeclarationResponseFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEncryptionDeclarationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppEncryptionDeclarationsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppEncryptionDeclarationResponseToJSON(value?: AppEncryptionDeclarationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEncryptionDeclarationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppEncryptionDeclarationsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

