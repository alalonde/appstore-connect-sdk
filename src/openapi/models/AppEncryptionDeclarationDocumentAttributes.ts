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
import type { AppMediaAssetState } from './AppMediaAssetState';
import {
    AppMediaAssetStateFromJSON,
    AppMediaAssetStateFromJSONTyped,
    AppMediaAssetStateToJSON,
} from './AppMediaAssetState';
import type { UploadOperation } from './UploadOperation';
import {
    UploadOperationFromJSON,
    UploadOperationFromJSONTyped,
    UploadOperationToJSON,
} from './UploadOperation';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationDocumentAttributes
 */
export interface AppEncryptionDeclarationDocumentAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppEncryptionDeclarationDocumentAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentAttributes
     */
    assetToken?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentAttributes
     */
    downloadUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof AppEncryptionDeclarationDocumentAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {AppMediaAssetState}
     * @memberof AppEncryptionDeclarationDocumentAttributes
     */
    assetDeliveryState?: AppMediaAssetState;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentAttributes interface.
 */
export function instanceOfAppEncryptionDeclarationDocumentAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEncryptionDeclarationDocumentAttributesFromJSON(json: any): AppEncryptionDeclarationDocumentAttributes {
    return AppEncryptionDeclarationDocumentAttributesFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileSize': !exists(json, 'fileSize') ? undefined : json['fileSize'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'assetToken': !exists(json, 'assetToken') ? undefined : json['assetToken'],
        'downloadUrl': !exists(json, 'downloadUrl') ? undefined : json['downloadUrl'],
        'sourceFileChecksum': !exists(json, 'sourceFileChecksum') ? undefined : json['sourceFileChecksum'],
        'uploadOperations': !exists(json, 'uploadOperations') ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'assetDeliveryState': !exists(json, 'assetDeliveryState') ? undefined : AppMediaAssetStateFromJSON(json['assetDeliveryState']),
    };
}

export function AppEncryptionDeclarationDocumentAttributesToJSON(value?: AppEncryptionDeclarationDocumentAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'assetToken': value.assetToken,
        'downloadUrl': value.downloadUrl,
        'sourceFileChecksum': value.sourceFileChecksum,
        'uploadOperations': value.uploadOperations === undefined ? undefined : ((value.uploadOperations as Array<any>).map(UploadOperationToJSON)),
        'assetDeliveryState': AppMediaAssetStateToJSON(value.assetDeliveryState),
    };
}

