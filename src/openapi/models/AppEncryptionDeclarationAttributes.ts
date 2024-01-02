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
import type { AppEncryptionDeclarationState } from './AppEncryptionDeclarationState';
import {
    AppEncryptionDeclarationStateFromJSON,
    AppEncryptionDeclarationStateFromJSONTyped,
    AppEncryptionDeclarationStateToJSON,
} from './AppEncryptionDeclarationState';
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
} from './Platform';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationAttributes
 */
export interface AppEncryptionDeclarationAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationAttributes
     */
    appDescription?: string;
    /**
     * 
     * @type {Date}
     * @memberof AppEncryptionDeclarationAttributes
     */
    createdDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof AppEncryptionDeclarationAttributes
     * @deprecated
     */
    usesEncryption?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEncryptionDeclarationAttributes
     */
    exempt?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEncryptionDeclarationAttributes
     */
    containsProprietaryCryptography?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEncryptionDeclarationAttributes
     */
    containsThirdPartyCryptography?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppEncryptionDeclarationAttributes
     */
    availableOnFrenchStore?: boolean;
    /**
     * 
     * @type {Platform}
     * @memberof AppEncryptionDeclarationAttributes
     */
    platform?: Platform;
    /**
     * 
     * @type {Date}
     * @memberof AppEncryptionDeclarationAttributes
     * @deprecated
     */
    uploadedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationAttributes
     * @deprecated
     */
    documentUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationAttributes
     * @deprecated
     */
    documentName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationAttributes
     * @deprecated
     */
    documentType?: string;
    /**
     * 
     * @type {AppEncryptionDeclarationState}
     * @memberof AppEncryptionDeclarationAttributes
     */
    appEncryptionDeclarationState?: AppEncryptionDeclarationState;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationAttributes
     */
    codeValue?: string;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationAttributes interface.
 */
export function instanceOfAppEncryptionDeclarationAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEncryptionDeclarationAttributesFromJSON(json: any): AppEncryptionDeclarationAttributes {
    return AppEncryptionDeclarationAttributesFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appDescription': !exists(json, 'appDescription') ? undefined : json['appDescription'],
        'createdDate': !exists(json, 'createdDate') ? undefined : (new Date(json['createdDate'])),
        'usesEncryption': !exists(json, 'usesEncryption') ? undefined : json['usesEncryption'],
        'exempt': !exists(json, 'exempt') ? undefined : json['exempt'],
        'containsProprietaryCryptography': !exists(json, 'containsProprietaryCryptography') ? undefined : json['containsProprietaryCryptography'],
        'containsThirdPartyCryptography': !exists(json, 'containsThirdPartyCryptography') ? undefined : json['containsThirdPartyCryptography'],
        'availableOnFrenchStore': !exists(json, 'availableOnFrenchStore') ? undefined : json['availableOnFrenchStore'],
        'platform': !exists(json, 'platform') ? undefined : PlatformFromJSON(json['platform']),
        'uploadedDate': !exists(json, 'uploadedDate') ? undefined : (new Date(json['uploadedDate'])),
        'documentUrl': !exists(json, 'documentUrl') ? undefined : json['documentUrl'],
        'documentName': !exists(json, 'documentName') ? undefined : json['documentName'],
        'documentType': !exists(json, 'documentType') ? undefined : json['documentType'],
        'appEncryptionDeclarationState': !exists(json, 'appEncryptionDeclarationState') ? undefined : AppEncryptionDeclarationStateFromJSON(json['appEncryptionDeclarationState']),
        'codeValue': !exists(json, 'codeValue') ? undefined : json['codeValue'],
    };
}

export function AppEncryptionDeclarationAttributesToJSON(value?: AppEncryptionDeclarationAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appDescription': value.appDescription,
        'createdDate': value.createdDate === undefined ? undefined : (value.createdDate.toISOString()),
        'usesEncryption': value.usesEncryption,
        'exempt': value.exempt,
        'containsProprietaryCryptography': value.containsProprietaryCryptography,
        'containsThirdPartyCryptography': value.containsThirdPartyCryptography,
        'availableOnFrenchStore': value.availableOnFrenchStore,
        'platform': PlatformToJSON(value.platform),
        'uploadedDate': value.uploadedDate === undefined ? undefined : (value.uploadedDate.toISOString()),
        'documentUrl': value.documentUrl,
        'documentName': value.documentName,
        'documentType': value.documentType,
        'appEncryptionDeclarationState': AppEncryptionDeclarationStateToJSON(value.appEncryptionDeclarationState),
        'codeValue': value.codeValue,
    };
}

