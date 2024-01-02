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
import type { CiTestResultAttributesDestinationTestResultsInner } from './CiTestResultAttributesDestinationTestResultsInner';
import {
    CiTestResultAttributesDestinationTestResultsInnerFromJSON,
    CiTestResultAttributesDestinationTestResultsInnerFromJSONTyped,
    CiTestResultAttributesDestinationTestResultsInnerToJSON,
} from './CiTestResultAttributesDestinationTestResultsInner';
import type { CiTestStatus } from './CiTestStatus';
import {
    CiTestStatusFromJSON,
    CiTestStatusFromJSONTyped,
    CiTestStatusToJSON,
} from './CiTestStatus';
import type { FileLocation } from './FileLocation';
import {
    FileLocationFromJSON,
    FileLocationFromJSONTyped,
    FileLocationToJSON,
} from './FileLocation';

/**
 * 
 * @export
 * @interface CiTestResultAttributes
 */
export interface CiTestResultAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiTestResultAttributes
     */
    className?: string;
    /**
     * 
     * @type {string}
     * @memberof CiTestResultAttributes
     */
    name?: string;
    /**
     * 
     * @type {CiTestStatus}
     * @memberof CiTestResultAttributes
     */
    status?: CiTestStatus;
    /**
     * 
     * @type {FileLocation}
     * @memberof CiTestResultAttributes
     */
    fileSource?: FileLocation;
    /**
     * 
     * @type {string}
     * @memberof CiTestResultAttributes
     */
    message?: string;
    /**
     * 
     * @type {Array<CiTestResultAttributesDestinationTestResultsInner>}
     * @memberof CiTestResultAttributes
     */
    destinationTestResults?: Array<CiTestResultAttributesDestinationTestResultsInner>;
}

/**
 * Check if a given object implements the CiTestResultAttributes interface.
 */
export function instanceOfCiTestResultAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiTestResultAttributesFromJSON(json: any): CiTestResultAttributes {
    return CiTestResultAttributesFromJSONTyped(json, false);
}

export function CiTestResultAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiTestResultAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'className': !exists(json, 'className') ? undefined : json['className'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'status': !exists(json, 'status') ? undefined : CiTestStatusFromJSON(json['status']),
        'fileSource': !exists(json, 'fileSource') ? undefined : FileLocationFromJSON(json['fileSource']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'destinationTestResults': !exists(json, 'destinationTestResults') ? undefined : ((json['destinationTestResults'] as Array<any>).map(CiTestResultAttributesDestinationTestResultsInnerFromJSON)),
    };
}

export function CiTestResultAttributesToJSON(value?: CiTestResultAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'className': value.className,
        'name': value.name,
        'status': CiTestStatusToJSON(value.status),
        'fileSource': FileLocationToJSON(value.fileSource),
        'message': value.message,
        'destinationTestResults': value.destinationTestResults === undefined ? undefined : ((value.destinationTestResults as Array<any>).map(CiTestResultAttributesDestinationTestResultsInnerToJSON)),
    };
}

