/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

import {
  hexToRgba,
} from '../design/spectrumDna/helpers.js';

import {
  SPECTRUM_COLOR_GRAY_400,
  SPECTRUM_COLOR_GRAY_700,
  SPECTRUM_COLOR_BLUE_400,
  SPECTRUM_COLOR_GREEN_400,
} from '../design/spectrumDna/colors.js';

const PLAYER_HEIGHT = 84;
const PLAYER_PADDING = 26;
const PLAYER_BORDER_RADIUS = 4;
const PLAYER_MARGIN_BOTTOM = 8;
const PLAYER_DISPLAY = 'flex';

/**
 * Audio Placeholder Source
 *
 * @type {String}
 */
const AUDIO_PLACEHOLDER_SOURCE = 'https://audios.ftcdn.net/03/53/73/13/48K_353731386.m4a';

/**
 * Audio IndexedDB name
 *
 * @type {String}
 */
const CROP_DB = 'crop-db';
const AUDIO_CROP_STORE = 'audio-crop';
const AUDIO_CROP_ID = 'stock-audio-crop';
const FILE_DB = 'file-db';
const AUDIO_FILE_STORE = 'audio-file';
const AUDIO_UPLOAD_FILE_ID = 'stock-audio-file';

/**
 * Wavesurfer height
 *
 * @type {Number}
 */
const AUDIO_PLAYER_HEIGHT = 50;

/**
 * Audio player styles
 */
const AUDIO_PLAYER_CURSOR_COLOR = SPECTRUM_COLOR_GRAY_700;
const AUDIO_PLAYER_PROGRESS_COLOR = SPECTRUM_COLOR_BLUE_400;
const AUDIO_PLAYER_WAVE_COLOR = SPECTRUM_COLOR_GRAY_400;
const AUDIO_PLAYER_SELECTION_COLOR = hexToRgba(SPECTRUM_COLOR_GREEN_400, 0.4);

/**
 * Audio region styles
 */
const AUDIO_REGION_HANDLE_COLOR = SPECTRUM_COLOR_GRAY_700;
const AUDIO_REGION_HANDLE_WIDTH = '4px';

/*
 * Minimum and maximum selection length
 */
const AUDIO_PLAYER_MIN_SELECTION_LENGTH = 3;
const AUDIO_PLAYER_MAX_SELECTION_LENGTH = 20;

/**
 * Patterns
 */
const AUDIO_START_END_TIME_PATTERN = '[0-9]{1,3}:[0-5]?\\d';

/**
 * Wavesurfer Regions plugin
 */
const AUDIO_UPLOAD_DIALOG_REGION_NAME = 'audio-upload-dialog-region';
const AUDIO_UPLOAD_DIALOG_DEFAULT_START = 0;
const AUDIO_UPLOAD_DIALOG_DEFAULT_END = 8;

export {
  PLAYER_BORDER_RADIUS,
  PLAYER_DISPLAY,
  PLAYER_HEIGHT,
  PLAYER_MARGIN_BOTTOM,
  PLAYER_PADDING,
  AUDIO_PLACEHOLDER_SOURCE,
  CROP_DB,
  FILE_DB,
  AUDIO_CROP_STORE,
  AUDIO_CROP_ID,
  AUDIO_FILE_STORE,
  AUDIO_UPLOAD_FILE_ID,
  AUDIO_PLAYER_HEIGHT,
  AUDIO_PLAYER_CURSOR_COLOR,
  AUDIO_PLAYER_PROGRESS_COLOR,
  AUDIO_PLAYER_WAVE_COLOR,
  AUDIO_PLAYER_SELECTION_COLOR,
  AUDIO_REGION_HANDLE_COLOR,
  AUDIO_REGION_HANDLE_WIDTH,
  AUDIO_PLAYER_MIN_SELECTION_LENGTH,
  AUDIO_PLAYER_MAX_SELECTION_LENGTH,
  AUDIO_START_END_TIME_PATTERN,
  AUDIO_UPLOAD_DIALOG_REGION_NAME,
  AUDIO_UPLOAD_DIALOG_DEFAULT_START,
  AUDIO_UPLOAD_DIALOG_DEFAULT_END,
};
