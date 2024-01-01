// convert.js
//   Convert frequently used EV range and energy units

// Copyright 2022 Tom Cameron

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Definitions:
//   EPD - Energy Per Distance (Wh/mk, Wh/km)
//   DPE - Distance Per Energy (Mi/kWh, km/kWh)
//   KTM - Kilometers to Miles
//   MTK - Miles to Kilometers

const km_to_mile = 1.609344;
const kWh = 1000.0;
const flashTime = 3000;

// TODO: Pass field names to common functions for distance/kWh to Wh/distance and Wh/distance to distance/kWh
// TODO: Pass field names to common functions for km to mi and mi to km
// TODO: When a field is empty or invalid, highlight it with a red surrounding box
// TODO: Reset highlighting when "Clear" or "Convert" button is clicked.

function flashField(field) {
    let delayVal = 0;

    field.setAttribute('class', 'blinkingfield');
    setTimeout(() => { field.removeAttribute('class'); }, flashTime);
}

function helperCtoF(value) {
    return Number(((value * 1.8) + 32).toFixed(2));
}

function helperFtoC(value) {
    return Number(((value - 32) / 1.8).toFixed(2));
}

function helperKTM(value) {
    return Number((value * km_to_mile).toFixed(2));
}

function helperMTK(value) {
    return Number((value / km_to_mile).toFixed(2));
}

function helperDPE(value) {
    return Number((kWh / (Number(value))).toFixed(2));
}

function helperEPD(value) {
    return Number((kWh / (Number(value))).toFixed(2));
}

function convertCtoF() {
    srcField = document.getElementById('inpCToF');
    dstField = document.getElementById('answerCToF');

    dstField.value = '';
    if (srcField.value) {
        dstField.value = helperCtoF(srcField.value);
    } else {
        console.log("No value in " + srcField.id);
        flashField(srcField);
    }
}

function convertFtoC() {
    srcField = document.getElementById('inpFToC');
    dstField = document.getElementById('answerFToC');

    dstField.value = '';
    if (srcField.value) {
        dstField.value = helperFtoC(srcField.value);
    } else {
        console.log("No value in " + srcField.id);
        flashField(srcField);
    }
}

function convertKTM(srcField, dstField) {
    dstField.value = '';
    if (srcField.value) {
        dstField.value = helperKTM(srcField.value);
    } else {
        console.log("No value in " + srcField.id);
        flashField(srcField);
    }
}

function convertMTK(srcField, dstField) {
    dstField.value = '';
    if (srcField.value) {
        dstField.value = helperMTK(Number(srcField.value));
    } else {
        console.log("No value in " + srcField.id);
        flashField(srcField);
    }
}

function convertDPEtoEPD(srcField, dstField) {
    dstField.value = '';
    if (srcField.value) {
        dstField.value = helperDPE(Number(srcField.value));
    } else {
        console.log("No value in " + srcField.id);
        flashField(srcField);
    }
}

function convertEPDtoDPE(srcField, dstField) {
    dstField.value = '';
    if (srcField.value) {
        dstField.value = helperEPD(Number(srcField.value));
    } else {
        console.log("No value in " + srcField.id);
        flashField(srcField);
    }
}

function convertKmToMi() {
    const srcField = document.getElementById('inpKmToMi');
    const dstField = document.getElementById('answerKmToMi');

    convertKTM(srcField, dstField);
}

function convertMiToKm() {
    const srcField = document.getElementById('inpMiToKm');
    const dstField = document.getElementById('answerMiToKm');

    convertMTK(srcField, dstField);
}

function convertKmPerKwhToWhPerKm() {
    const srcField = document.getElementById('inpKmPerKwhToWhPerKm');
    const dstField = document.getElementById('answerKmPerKwhToWhPerKm');

    convertDPEtoEPD(srcField, dstField);
}

function convertWhPerKmToKmPerKwh() {
    srcField = document.getElementById('inpWhPerKmToKmPerKwh');
    dstField = document.getElementById('answerWhPerKmToKmPerKwh');

    convertEPDtoDPE(srcField, dstField);
}

function convertKmPerKwnToMiPerKwh() {
    srcField = document.getElementById('inpKmPerKwnToMiPerKwh');
    dstField = document.getElementById('answerKmPerKwnToMiPerKwh');

    convertKTM(srcField, dstField);
}

function convertMiPerKwhToKmPerKwh() {
    srcField = document.getElementById('inpMiPerKwhToKmPerKwh');
    dstField = document.getElementById('answerMiPerKwhToKmPerKwh');

    convertMTK(srcField, dstField);
}

function convertWhPerKmToWhPerMi() {
    srcField = document.getElementById('inpWhPerKmToWhPerMi');
    dstField = document.getElementById('answerWhPerKmToWhPerMi');

    convertKTM(srcField, dstField);
}

function convertWhPerMiToWhPerKm() {
    srcField = document.getElementById('inpWhPerMiToWhPerKm');
    dstField = document.getElementById('answerWhPerMiToWhPerKm');

    convertMTK(srcField, dstField);
}

function convertMiPerKwhToWhPerMile() {
    srcField = document.getElementById('inpMiPerKwhToWhPerMile');
    dstField = document.getElementById('answerMiPerKwhToWhPerMile');

    convertDPEtoEPD(srcField, dstField);
}

function convertWhPerMileToMiPerKwh() {
    srcField = document.getElementById('inpWhPerMileToMiPerKwh');
    dstField = document.getElementById('answerWhPerMileToMiPerKwh');

    convertEPDtoDPE(srcField, dstField);
}

function clearValueFields() {
    valueFields = document.getElementsByClassName('valuefields');
    for (const valueField of valueFields) {
        console.log('Clearing ' + valueField.id)
        valueField.value = '';
    }
}
