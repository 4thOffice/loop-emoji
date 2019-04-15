import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULTS = {
    martFontFamily: 'Segoe UI',
    martBG: '#333',
    martShowHeader: true,
    martHeaderBG: '#222',
    martHeaderFontSize: '12px',
    martHeaderPadding: { x: '10px', y: '3px' },
    martHeaderFG: '#fff',
    martActiveCategoryIndicatorColor: '#4220b1',
    martCategoryFontSize: '18px',
    martCategoryColor: '#fff',
    martCategoryColorActive: '#4220b1',
    martActiveCategoryIndicatoHeight: '4px',
    martWidth: '100%',
    martHeight: '30vh',
    martBorderRadius: '5px',
    martEmojiFontSize: '120%',
    martEmojiContentPaddingLeft: '6%',
    martEmojiPadding: { x: '40px', y: '40px' },
    martFooterFG: '#fff',
    martFooterBG: '#222',
    martFooterFontSize: '12px',
    martFooterPadding: { x: '10px', y: '3px' },
    martShowFooter: true,
    maxRecentEmoji: 36,
    recentEmojiStoreKey: 'ngx-emoji-picker-recent-emo-store',
    emojiNotFoundText: 'No results ;)',
    searchEmojiPlaceholderText: 'Search',
    martEmojiNotFoundFG: '#888',
    martSearchBoxStyle: {
        FGcolor: '#333',
        BGcolor: 'transparent',
        borderColor: '#ccc',
        placeHolderColor: '#777',
        borderRadius: '30px',
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EMOJIS = [
    { id: 0, name: 'Search', icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            function (fill, width, height) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\" viewBox=\"0 0 20 20\"><path d=\"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z\"></path></svg>"; }), 'Search'] },
    { id: 1, name: 'Recent', icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            function (fill, width, height) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"></path><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path></svg>"; }), 'Recent'] },
    { id: 2,
        emojis: [
            ['😀', 'grinning'],
            ['😃', 'smiley'],
            ['😄', 'smile'],
            ['😁', 'grin'],
            ['😆', 'laughing'],
            ['😅', 'sweat_smile'],
            ['😂', 'joy'],
            ['🤣', 'rofl'],
            ['😊', 'blush'],
            ['😇', 'innocent'],
            ['🙂', 'slightly_smiling_face, :)'],
            ['🙃', 'upside_down_face'],
            ['😉', 'wink, ;)'],
            ['😌', 'relieved'],
            ['😍', 'heart_eyes'],
            ['😘', 'kissing_heart'],
            ['😗', 'kissing'],
            ['😙', 'kissing_smiling_eyes'],
            ['😚', 'kissing_closed_eyes'],
            ['😋', 'yum'],
            ['😜', 'stuck_out_tongue_winking_eye'],
            ['😝', 'stuck_out_tongue_closed_eyes'],
            ['😛', 'stuck_out_tongue, :P'],
            ['🤑', 'money_mouth_face'],
            ['🤗', 'hugs'],
            ['🤓', 'nerd_face'],
            ['😎', 'sunglasses, B)'],
            ['🤡', 'clown_face'],
            ['🤠', 'cowboy_hat_face'],
            ['😏', 'smirk'],
            ['😒', 'unamused'],
            ['😞', 'disappointed'],
            ['😔', 'pensive'],
            ['😟', 'worried'],
            ['😕', 'confused'],
            ['🙁', 'slightly_frowning_face'],
            ['☹️', 'frowning_face, :('],
            ['😣', 'persevere'],
            ['😖', 'confounded'],
            ['😫', 'tired_face'],
            ['😩', 'weary'],
            ['😤', 'triumph'],
            ['😠', 'angry'],
            ['😡', 'rage'],
            ['😶', 'no_mouth'],
            ['😐', 'neutral_face, :|'],
            ['😑', 'expressionless'],
            ['😯', 'hushed'],
            ['😦', 'frowning'],
            ['😧', 'anguished'],
            ['😮', 'open_mouth'],
            ['😲', 'astonished'],
            ['😵', 'dizzy_face'],
            ['😳', 'flushed'],
            ['😱', 'scream'],
            ['😨', 'fearful'],
            ['😰', 'cold_sweat'],
            ['😢', 'cry'],
            ['😥', 'disappointed_relieved'],
            ['🤤', 'drooling_face'],
            ['😭', 'sob'],
            ['😓', 'sweat'],
            ['😪', 'sleepy'],
            ['😴', 'sleeping'],
            ['🙄', 'roll_eyes'],
            ['🤔', 'thinking'],
            ['🤥', 'lying_face'],
            ['😬', 'grimacing'],
            ['🤐', 'zipper_mouth_face'],
            ['🤢', 'nauseated_face'],
            ['🤧', 'sneezing_face'],
            ['😷', 'mask'],
            ['🤒', 'face_with_thermometer'],
            ['🤕', 'face_with_head_bandage'],
            ['😈', 'smiling_imp'],
            ['👿', 'imp'],
            ['👹', 'japanese_ogre'],
            ['👺', 'japanese_goblin'],
            ['💩', 'hankey'],
            ['👻', 'ghost'],
            ['💀', 'skull'],
            ['☠️', 'skull_and_crossbones'],
            ['👽', 'alien'],
            ['👾', 'space_invader'],
            ['🤖', 'robot'],
            ['🎃', 'jack_o_lantern'],
            ['😺', 'smiley_cat'],
            ['😸', 'smile_cat'],
            ['😹', 'joy_cat'],
            ['😻', 'heart_eyes_cat'],
            ['😼', 'smirk_cat'],
            ['😽', 'kissing_cat'],
            ['🙀', 'scream_cat'],
            ['😿', 'crying_cat_face'],
            ['😾', 'pouting_cat'],
            ['👐', 'open_hands'],
            ['🙌', 'raised_hands'],
            ['👏', 'clap'],
            ['🙏', 'pray'],
            ['🤝', 'handshake'],
            ['👍', '+1'],
            ['👎', '-1'],
            ['👊', 'fist_oncoming'],
            ['✊', 'fist_raised'],
            ['🤛', 'fist_left'],
            ['🤜', 'fist_right'],
            ['🤞', 'crossed_fingers'],
            ['✌️', 'v'],
            ['🤘', 'metal'],
            ['👌', 'ok_hand'],
            ['👈', 'point_left'],
            ['👉', 'point_right'],
            ['👆', 'point_up_2'],
            ['👇', 'point_down'],
            ['☝️', 'point_up'],
            ['✋', 'hand'],
            ['🤚', 'raised_back_of_hand'],
            ['🖐', 'raised_hand_with_fingers_splayed'],
            ['🖖', 'vulcan_salute'],
            ['👋', 'wave'],
            ['🤙', 'call_me_hand'],
            ['💪', 'muscle'],
            ['🖕', 'middle_finger'],
            ['✍️', 'writing_hand'],
            ['🤳', 'selfie'],
            ['💅', 'nail_care'],
            ['💍', 'ring'],
            ['💄', 'lipstick'],
            ['💋', 'kiss'],
            ['👄', 'lips'],
            ['👅', 'tongue'],
            ['👂', 'ear'],
            ['👃', 'nose'],
            ['👣', 'footprints'],
            ['👁', 'eye'],
            ['👀', 'eyes'],
            ['🗣', 'speaking_head'],
            ['👤', 'bust_in_silhouette'],
            ['👥', 'busts_in_silhouette'],
            ['👶', 'baby'],
            ['👦', 'boy'],
            ['👧', 'girl'],
            ['👨', 'man'],
            ['👩', 'woman'],
            /*['👱‍♀', 'blonde_woman'],*/
            ['👱', 'blonde_man'],
            ['👴', 'older_man'],
            ['👵', 'older_woman'],
            ['👲', 'man_with_gua_pi_mao'],
            /*['👳‍♀', 'woman_with_turban'],*/
            ['👳', 'man_with_turban'],
            /*['👮‍♀', 'policewoman'],*/
            ['👮', 'policeman'],
            /*['👷‍♀', 'construction_worker_woman'],*/
            ['👷', 'construction_worker_man'],
            /*['💂‍♀', 'guardswoman'],*/
            ['💂', 'guardsman'],
            /*['🕵️‍♀️', 'female_detective'],*/
            ['🕵', 'male_detective'],
            ['👩‍⚕', 'woman_health_worker'],
            ['👨‍⚕', 'man_health_worker'],
            ['👩‍🌾', 'woman_farmer'],
            ['👨‍🌾', 'man_farmer'],
            ['👩‍🍳', 'woman_cook'],
            ['👨‍🍳', 'man_cook'],
            ['👩‍🎓', 'woman_student'],
            ['👨‍🎓', 'man_student'],
            ['👩‍🎤', 'woman_singer'],
            ['👨‍🎤', 'man_singer'],
            ['👩‍🏫', 'woman_teacher'],
            ['👨‍🏫', 'man_teacher'],
            ['👩‍🏭', 'woman_factory_worker'],
            ['👨‍🏭', 'man_factory_worker'],
            ['👩‍💻', 'woman_technologist'],
            ['👨‍💻', 'man_technologist'],
            ['👩‍💼', 'woman_office_worker'],
            ['👨‍💼', 'man_office_worker'],
            ['👩‍🔧', 'woman_mechanic'],
            ['👨‍🔧', 'man_mechanic'],
            ['👩‍🔬', 'woman_scientist'],
            ['👨‍🔬', 'man_scientist'],
            ['👩‍🎨', 'woman_artist'],
            ['👨‍🎨', 'man_artist'],
            ['👩‍🚒', 'woman_firefighter'],
            ['👨‍🚒', 'man_firefighter'],
            /*['👩‍✈', 'woman_pilot'],*/
            /*['👨‍✈', 'man_pilot'],*/
            ['👩‍🚀', 'woman_astronaut'],
            ['👨‍🚀', 'man_astronaut'],
            /*['👩‍⚖', 'woman_judge'],*/
            /*['👨‍⚖', 'man_judge'],*/
            ['🤶', 'mrs_claus'],
            ['🎅', 'santa'],
            ['👸', 'princess'],
            ['🤴', 'prince'],
            ['👰', 'bride_with_veil'],
            ['🤵', 'man_in_tuxedo'],
            ['👼', 'angel'],
            ['🤰', 'pregnant_woman'],
            /*['🙇‍♀', 'bowing_woman'],*/
            ['🙇', 'bowing_man'],
            ['💁', 'tipping_hand_woman'],
            /*['💁‍♂', 'tipping_hand_man'],*/
            ['🙅', 'no_good_woman'],
            /*['🙅‍♂', 'no_good_man'],*/
            ['🙆', 'ok_woman'],
            /*['🙆‍♂', 'ok_man'],*/
            ['🙋', 'raising_hand_woman'],
            /*['🙋‍♂', 'raising_hand_man'],*/
            /*['🤦‍♀', 'woman_facepalming'],*/
            /*['🤦‍♂', 'man_facepalming'],*/
            /*['🤷‍♀', 'woman_shrugging'],*/
            /*['🤷‍♂', 'man_shrugging'],*/
            ['🙎', 'pouting_woman'],
            /*['🙎‍♂', 'pouting_man'],*/
            ['🙍', 'frowning_woman'],
            /*['🙍‍♂', 'frowning_man'],*/
            ['💇', 'haircut_woman'],
            /*['💇‍♂', 'haircut_man'],*/
            ['💆', 'massage_woman'],
            /*['💆‍♂', 'massage_man'],*/
            ['🕴', 'business_suit_levitating'],
            ['💃', 'dancer'],
            ['🕺', 'man_dancing'],
            ['👯', 'dancing_women'],
            /*['👯‍♂', 'dancing_men'],*/
            /*['🚶‍♀', 'walking_woman'],*/
            ['🚶', 'walking_man'],
            /*['🏃‍♀', 'running_woman'],*/
            ['🏃', 'running_man'],
            ['👫', 'couple'],
            ['👭', 'two_women_holding_hands'],
            ['👬', 'two_men_holding_hands'],
            ['💑', 'couple_with_heart_woman_man'],
            ['👩‍❤️‍👩', 'couple_with_heart_woman_woman'],
            ['👨‍❤️‍👨', 'couple_with_heart_man_man'],
            ['💏', 'couplekiss_man_woman'],
            ['👩‍❤️‍💋‍👩', 'couplekiss_woman_woman'],
            ['👨‍❤️‍💋‍👨', 'couplekiss_man_man'],
            ['👪', 'family_man_woman_boy'],
            ['👨‍👩‍👧', 'family_man_woman_girl'],
            ['👨‍👩‍👧‍👦', 'family_man_woman_girl_boy'],
            ['👨‍👩‍👦‍👦', 'family_man_woman_boy_boy'],
            ['👨‍👩‍👧‍👧', 'family_man_woman_girl_girl'],
            ['👩‍👩‍👦', 'family_woman_woman_boy'],
            ['👩‍👩‍👧', 'family_woman_woman_girl'],
            ['👩‍👩‍👧‍👦', 'family_woman_woman_girl_boy'],
            ['👩‍👩‍👦‍👦', 'family_woman_woman_boy_boy'],
            ['👩‍👩‍👧‍👧', 'family_woman_woman_girl_girl'],
            ['👨‍👨‍👦', 'family_man_man_boy'],
            ['👨‍👨‍👧', 'family_man_man_girl'],
            ['👨‍👨‍👧‍👦', 'family_man_man_girl_boy'],
            ['👨‍👨‍👦‍👦', 'family_man_man_boy_boy'],
            ['👨‍👨‍👧‍👧', 'family_man_man_girl_girl'],
            ['👩‍👦', 'family_woman_boy'],
            ['👩‍👧', 'family_woman_girl'],
            ['👩‍👧‍👦', 'family_woman_girl_boy'],
            ['👩‍👦‍👦', 'family_woman_boy_boy'],
            ['👩‍👧‍👧', 'family_woman_girl_girl'],
            ['👨‍👦', 'family_man_boy'],
            ['👨‍👧', 'family_man_girl'],
            ['👨‍👧‍👦', 'family_man_girl_boy'],
            ['👨‍👦‍👦', 'family_man_boy_boy'],
            ['👨‍👧‍👧', 'family_man_girl_girl'],
            ['👚', 'womans_clothes'],
            ['👕', 'shirt'],
            ['👖', 'jeans'],
            ['👔', 'necktie'],
            ['👗', 'dress'],
            ['👙', 'bikini'],
            ['👘', 'kimono'],
            ['👠', 'high_heel'],
            ['👡', 'sandal'],
            ['👢', 'boot'],
            ['👞', 'mans_shoe'],
            ['👟', 'athletic_shoe'],
            ['👒', 'womans_hat'],
            ['🎩', 'tophat'],
            ['🎓', 'mortar_board'],
            ['👑', 'crown'],
            ['⛑', 'rescue_worker_helmet'],
            ['🎒', 'school_satchel'],
            ['👝', 'pouch'],
            ['👛', 'purse'],
            ['👜', 'handbag'],
            ['💼', 'briefcase'],
            ['👓', 'eyeglasses'],
            ['🕶', 'dark_sunglasses'],
            ['🌂', 'closed_umbrella'],
            ['☂️', 'open_umbrella']
        ],
        name: 'People',
        icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            function (fill, width, height) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"></path></svg>"; }), 'smile']
    },
    {
        id: 3,
        emojis: [
            ['🐶', 'dog'],
            ['🐱', 'cat'],
            ['🐭', 'mouse'],
            ['🐹', 'hamster'],
            ['🐰', 'rabbit'],
            ['🦊', 'fox_face'],
            ['🐻', 'bear'],
            ['🐼', 'panda_face'],
            ['🐨', 'koala'],
            ['🐯', 'tiger'],
            ['🦁', 'lion'],
            ['🐮', 'cow'],
            ['🐷', 'pig'],
            ['🐽', 'pig_nose'],
            ['🐸', 'frog'],
            ['🐵', 'monkey_face'],
            ['🙈', 'see_no_evil'],
            ['🙉', 'hear_no_evil'],
            ['🙊', 'speak_no_evil'],
            ['🐒', 'monkey'],
            ['🐔', 'chicken'],
            ['🐧', 'penguin'],
            ['🐦', 'bird'],
            ['🐤', 'baby_chick'],
            ['🐣', 'hatching_chick'],
            ['🐥', 'hatched_chick'],
            ['🦆', 'duck'],
            ['🦅', 'eagle'],
            ['🦉', 'owl'],
            ['🦇', 'bat'],
            ['🐺', 'wolf'],
            ['🐗', 'boar'],
            ['🐴', 'horse'],
            ['🦄', 'unicorn'],
            ['🐝', 'bee'],
            ['🐛', 'bug'],
            ['🦋', 'butterfly'],
            ['🐌', 'snail'],
            ['🐚', 'shell'],
            ['🐞', 'beetle'],
            ['🐜', 'ant'],
            ['🕷', 'spider'],
            ['🕸', 'spider_web'],
            ['🐢', 'turtle'],
            ['🐍', 'snake'],
            ['🦎', 'lizard'],
            ['🦂', 'scorpion'],
            ['🦀', 'crab'],
            ['🦑', 'squid'],
            ['🐙', 'octopus'],
            ['🦐', 'shrimp'],
            ['🐠', 'tropical_fish'],
            ['🐟', 'fish'],
            ['🐡', 'blowfish'],
            ['🐬', 'dolphin'],
            ['🦈', 'shark'],
            ['🐳', 'whale'],
            ['🐋', 'whale2'],
            ['🐊', 'crocodile'],
            ['🐆', 'leopard'],
            ['🐅', 'tiger2'],
            ['🐃', 'water_buffalo'],
            ['🐂', 'ox'],
            ['🐄', 'cow2'],
            ['🦌', 'deer'],
            ['🐪', 'dromedary_camel'],
            ['🐫', 'camel'],
            ['🐘', 'elephant'],
            ['🦏', 'rhinoceros'],
            ['🦍', 'gorilla'],
            ['🐎', 'racehorse'],
            ['🐖', 'pig2'],
            ['🐐', 'goat'],
            ['🐏', 'ram'],
            ['🐑', 'sheep'],
            ['🐕', 'dog2'],
            ['🐩', 'poodle'],
            ['🐈', 'cat2'],
            ['🐓', 'rooster'],
            ['🦃', 'turkey'],
            ['🕊', 'dove'],
            ['🐇', 'rabbit2'],
            ['🐁', 'mouse2'],
            ['🐀', 'rat'],
            ['🐿', 'chipmunk'],
            ['🐾', 'feet'],
            ['🐉', 'dragon'],
            ['🐲', 'dragon_face'],
            ['🌵', 'cactus'],
            ['🎄', 'christmas_tree'],
            ['🌲', 'evergreen_tree'],
            ['🌳', 'deciduous_tree'],
            ['🌴', 'palm_tree'],
            ['🌱', 'seedling'],
            ['🌿', 'herb'],
            ['☘️', 'shamrock'],
            ['🍀', 'four_leaf_clover'],
            ['🎍', 'bamboo'],
            ['🎋', 'tanabata_tree'],
            ['🍃', 'leaves'],
            ['🍂', 'fallen_leaf'],
            ['🍁', 'maple_leaf'],
            ['🍄', 'mushroom'],
            ['🌾', 'ear_of_rice'],
            ['💐', 'bouquet'],
            ['🌷', 'tulip'],
            ['🌹', 'rose'],
            ['🥀', 'wilted_flower'],
            ['🌻', 'sunflower'],
            ['🌼', 'blossom'],
            ['🌸', 'cherry_blossom'],
            ['🌺', 'hibiscus'],
            ['🌎', 'earth_americas'],
            ['🌍', 'earth_africa'],
            ['🌏', 'earth_asia'],
            ['🌕', 'full_moon'],
            ['🌖', 'waning_gibbous_moon'],
            ['🌗', 'last_quarter_moon'],
            ['🌘', 'waning_crescent_moon'],
            ['🌑', 'new_moon'],
            ['🌒', 'waxing_crescent_moon'],
            ['🌓', 'first_quarter_moon'],
            ['🌔', 'moon'],
            ['🌚', 'new_moon_with_face'],
            ['🌝', 'full_moon_with_face'],
            ['🌞', 'sun_with_face'],
            ['🌛', 'first_quarter_moon_with_face'],
            ['🌜', 'last_quarter_moon_with_face'],
            ['🌙', 'crescent_moon'],
            ['💫', 'dizzy'],
            ['⭐️', 'star'],
            ['🌟', 'star2'],
            ['✨', 'sparkles'],
            ['⚡️', 'zap'],
            ['🔥', 'fire'],
            ['💥', 'boom'],
            ['☄', 'comet'],
            ['☀️', 'sunny'],
            ['🌤', 'sun_behind_small_cloud'],
            ['⛅️', 'partly_sunny'],
            ['🌥', 'sun_behind_large_cloud'],
            ['🌦', 'sun_behind_rain_cloud'],
            ['🌈', 'rainbow'],
            ['☁️', 'cloud'],
            ['🌧', 'cloud_with_rain'],
            ['⛈', 'cloud_with_lightning_and_rain'],
            ['🌩', 'cloud_with_lightning'],
            ['🌨', 'cloud_with_snow'],
            ['☃️', 'snowman_with_snow'],
            ['⛄️', 'snowman'],
            ['❄️', 'snowflake'],
            ['🌬', 'wind_face'],
            ['💨', 'dash'],
            ['🌪', 'tornado'],
            ['🌫', 'fog'],
            ['🌊', 'ocean'],
            ['💧', 'droplet'],
            ['💦', 'sweat_drops'],
            ['☔️', 'umbrella']
        ],
        name: 'Nature',
        icon: [(/**
             * @param {?} fill
             * @param {?} height
             * @param {?} width
             * @return {?}
             */
            function (fill, height, width) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"></path><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"></path></svg>"; }), 'cherry_blossom']
    },
    {
        id: 4,
        emojis: [
            ['🍏', 'green_apple'],
            ['🍎', 'apple'],
            ['🍐', 'pear'],
            ['🍊', 'tangerine'],
            ['🍋', 'lemon'],
            ['🍌', 'banana'],
            ['🍉', 'watermelon'],
            ['🍇', 'grapes'],
            ['🍓', 'strawberry'],
            ['🍈', 'melon'],
            ['🍒', 'cherries'],
            ['🍑', 'peach'],
            ['🍍', 'pineapple'],
            ['🥝', 'kiwi_fruit'],
            ['🥑', 'avocado'],
            ['🍅', 'tomato'],
            ['🍆', 'eggplant'],
            ['🥒', 'cucumber'],
            ['🥕', 'carrot'],
            ['🌽', 'corn'],
            ['🌶', 'hot_pepper'],
            ['🥔', 'potato'],
            ['🍠', 'sweet_potato'],
            ['🌰', 'chestnut'],
            ['🥜', 'peanuts'],
            ['🍯', 'honey_pot'],
            ['🥐', 'croissant'],
            ['🍞', 'bread'],
            ['🥖', 'baguette_bread'],
            ['🧀', 'cheese'],
            ['🥚', 'egg'],
            ['🍳', 'fried_egg'],
            ['🥓', 'bacon'],
            ['🥞', 'pancakes'],
            ['🍤', 'fried_shrimp'],
            ['🍗', 'poultry_leg'],
            ['🍖', 'meat_on_bone'],
            ['🍕', 'pizza'],
            ['🌭', 'hotdog'],
            ['🍔', 'hamburger'],
            ['🍟', 'fries'],
            ['🥙', 'stuffed_flatbread'],
            ['🌮', 'taco'],
            ['🌯', 'burrito'],
            ['🥗', 'green_salad'],
            ['🥘', 'shallow_pan_of_food'],
            ['🍝', 'spaghetti'],
            ['🍜', 'ramen'],
            ['🍲', 'stew'],
            ['🍥', 'fish_cake'],
            ['🍣', 'sushi'],
            ['🍱', 'bento'],
            ['🍛', 'curry'],
            ['🍚', 'rice'],
            ['🍙', 'rice_ball'],
            ['🍘', 'rice_cracker'],
            ['🍢', 'oden'],
            ['🍡', 'dango'],
            ['🍧', 'shaved_ice'],
            ['🍨', 'ice_cream'],
            ['🍦', 'icecream'],
            ['🍰', 'cake'],
            ['🎂', 'birthday'],
            ['🍮', 'custard'],
            ['🍭', 'lollipop'],
            ['🍬', 'candy'],
            ['🍫', 'chocolate_bar'],
            ['🍿', 'popcorn'],
            ['🍩', 'doughnut'],
            ['🍪', 'cookie'],
            ['🥛', 'milk_glass'],
            ['🍼', 'baby_bottle'],
            ['☕️', 'coffee'],
            ['🍵', 'tea'],
            ['🍶', 'sake'],
            ['🍺', 'beer'],
            ['🍻', 'beers'],
            ['🥂', 'clinking_glasses'],
            ['🍷', 'wine_glass'],
            ['🥃', 'tumbler_glass'],
            ['🍸', 'cocktail'],
            ['🍹', 'tropical_drink'],
            ['🍾', 'champagne'],
            ['🥄', 'spoon'],
            ['🍴', 'fork_and_knife'],
            ['🍽', 'plate_with_cutlery']
        ],
        name: 'Foods',
        icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            function (fill, width, height) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"></path></svg>"; }), 'hamburger']
    },
    {
        id: 5,
        emojis: [
            ['⚽️', 'soccer'],
            ['🏀', 'basketball'],
            ['🏈', 'football'],
            ['⚾️', 'baseball'],
            ['🎾', 'tennis'],
            ['🏐', 'volleyball'],
            ['🏉', 'rugby_football'],
            ['🎱', '8ball'],
            ['🏓', 'ping_pong'],
            ['🏸', 'badminton'],
            ['🥅', 'goal_net'],
            ['🏒', 'ice_hockey'],
            ['🏑', 'field_hockey'],
            ['🏏', 'cricket'],
            ['⛳️', 'golf'],
            ['🏹', 'bow_and_arrow'],
            ['🎣', 'fishing_pole_and_fish'],
            ['🥊', 'boxing_glove'],
            ['🥋', 'martial_arts_uniform'],
            ['⛸', 'ice_skate'],
            ['🎿', 'ski'],
            ['⛷', 'skier'],
            ['🏂', 'snowboarder'],
            /*['🏋️‍♀️', 'weight_lifting_woman'],*/
            ['🏋', 'weight_lifting_man'],
            ['🤺', 'person_fencing'],
            /*['🤼‍♀', 'women_wrestling'],*/
            /*['🤼‍♂', 'men_wrestling'],*/
            /*['🤸‍♀', 'woman_cartwheeling'],*/
            /*['🤸‍♂', 'man_cartwheeling'],*/
            /*['⛹️‍♀️', 'basketball_woman'],*/
            ['⛹', 'basketball_man'],
            /*['🤾‍♀', 'woman_playing_handball'],*/
            /*['🤾‍♂', 'man_playing_handball'],*/
            /*['🏌️‍♀️', 'golfing_woman'],*/
            ['🏌', 'golfing_man'],
            /*['🏄‍♀', 'surfing_woman'],*/
            ['🏄', 'surfing_man'],
            /*['🏊‍♀', 'swimming_woman'],*/
            ['🏊', 'swimming_man'],
            /*['🤽‍♀', 'woman_playing_water_polo'],*/
            /*['🤽‍♂', 'man_playing_water_polo'],*/
            /*['🚣‍♀', 'rowing_woman'],*/
            ['🚣', 'rowing_man'],
            ['🏇', 'horse_racing'],
            /*['🚴‍♀', 'biking_woman'],*/
            ['🚴', 'biking_man'],
            /*['🚵‍♀', 'mountain_biking_woman'],*/
            ['🚵', 'mountain_biking_man'],
            ['🎽', 'running_shirt_with_sash'],
            ['🏅', 'medal_sports'],
            ['🎖', 'medal_military'],
            ['🥇', '1st_place_medal'],
            ['🥈', '2nd_place_medal'],
            ['🥉', '3rd_place_medal'],
            ['🏆', 'trophy'],
            ['🏵', 'rosette'],
            ['🎗', 'reminder_ribbon'],
            ['🎫', 'ticket'],
            ['🎟', 'tickets'],
            ['🎪', 'circus_tent'],
            /*['🤹‍♀', 'woman_juggling'],*/
            /*['🤹‍♂', 'man_juggling'],*/
            ['🎭', 'performing_arts'],
            ['🎨', 'art'],
            ['🎬', 'clapper'],
            ['🎤', 'microphone'],
            ['🎧', 'headphones'],
            ['🎼', 'musical_score'],
            ['🎹', 'musical_keyboard'],
            ['🥁', 'drum'],
            ['🎷', 'saxophone'],
            ['🎺', 'trumpet'],
            ['🎸', 'guitar'],
            ['🎻', 'violin'],
            ['🎲', 'game_die'],
            ['🎯', 'dart'],
            ['🎳', 'bowling'],
            ['🎮', 'video_game'],
            ['🎰', 'slot_machine']
        ],
        name: 'Activity',
        icon: [(/**
             * @param {?} fill
             * @param {?} height
             * @param {?} width
             * @return {?}
             */
            function (fill, height, width) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"></path></svg>"; }), 'soccer']
    },
    {
        id: 6,
        emojis: [
            ['🚗', 'car'],
            ['🚕', 'taxi'],
            ['🚙', 'blue_car'],
            ['🚌', 'bus'],
            ['🚎', 'trolleybus'],
            ['🏎', 'racing_car'],
            ['🚓', 'police_car'],
            ['🚑', 'ambulance'],
            ['🚒', 'fire_engine'],
            ['🚐', 'minibus'],
            ['🚚', 'truck'],
            ['🚛', 'articulated_lorry'],
            ['🚜', 'tractor'],
            ['🛴', 'kick_scooter'],
            ['🚲', 'bike'],
            ['🛵', 'motor_scooter'],
            ['🏍', 'motorcycle'],
            ['🚨', 'rotating_light'],
            ['🚔', 'oncoming_police_car'],
            ['🚍', 'oncoming_bus'],
            ['🚘', 'oncoming_automobile'],
            ['🚖', 'oncoming_taxi'],
            ['🚡', 'aerial_tramway'],
            ['🚠', 'mountain_cableway'],
            ['🚟', 'suspension_railway'],
            ['🚃', 'railway_car'],
            ['🚋', 'train'],
            ['🚞', 'mountain_railway'],
            ['🚝', 'monorail'],
            ['🚄', 'bullettrain_side'],
            ['🚅', 'bullettrain_front'],
            ['🚈', 'light_rail'],
            ['🚂', 'steam_locomotive'],
            ['🚆', 'train2'],
            ['🚇', 'metro'],
            ['🚊', 'tram'],
            ['🚉', 'station'],
            ['🚁', 'helicopter'],
            ['🛩', 'small_airplane'],
            ['✈️', 'airplane'],
            ['🛫', 'flight_departure'],
            ['🛬', 'flight_arrival'],
            ['🚀', 'rocket'],
            ['🛰', 'artificial_satellite'],
            ['💺', 'seat'],
            ['🛶', 'canoe'],
            ['⛵️', 'boat'],
            ['🛥', 'motor_boat'],
            ['🚤', 'speedboat'],
            ['🛳', 'passenger_ship'],
            ['⛴', 'ferry'],
            ['🚢', 'ship'],
            ['⚓️', 'anchor'],
            ['🚧', 'construction'],
            ['⛽️', 'fuelpump'],
            ['🚏', 'busstop'],
            ['🚦', 'vertical_traffic_light'],
            ['🚥', 'traffic_light'],
            ['🗺', 'world_map'],
            ['🗿', 'moyai'],
            ['🗽', 'statue_of_liberty'],
            ['⛲️', 'fountain'],
            ['🗼', 'tokyo_tower'],
            ['🏰', 'european_castle'],
            ['🏯', 'japanese_castle'],
            ['🏟', 'stadium'],
            ['🎡', 'ferris_wheel'],
            ['🎢', 'roller_coaster'],
            ['🎠', 'carousel_horse'],
            ['⛱', 'parasol_on_ground'],
            ['🏖', 'beach_umbrella'],
            ['🏝', 'desert_island'],
            ['⛰', 'mountain'],
            ['🏔', 'mountain_snow'],
            ['🗻', 'mount_fuji'],
            ['🌋', 'volcano'],
            ['🏜', 'desert'],
            ['🏕', 'camping'],
            ['⛺️', 'tent'],
            ['🛤', 'railway_track'],
            ['🛣', 'motorway'],
            ['🏗', 'building_construction'],
            ['🏭', 'factory'],
            ['🏠', 'house'],
            ['🏡', 'house_with_garden'],
            ['🏘', 'houses'],
            ['🏚', 'derelict_house'],
            ['🏢', 'office'],
            ['🏬', 'department_store'],
            ['🏣', 'post_office'],
            ['🏤', 'european_post_office'],
            ['🏥', 'hospital'],
            ['🏦', 'bank'],
            ['🏨', 'hotel'],
            ['🏪', 'convenience_store'],
            ['🏫', 'school'],
            ['🏩', 'love_hotel'],
            ['💒', 'wedding'],
            ['🏛', 'classical_building'],
            ['⛪️', 'church'],
            ['🕌', 'mosque'],
            ['🕍', 'synagogue'],
            ['🕋', 'kaaba'],
            ['⛩', 'shinto_shrine'],
            ['🗾', 'japan'],
            ['🎑', 'rice_scene'],
            ['🏞', 'national_park'],
            ['🌅', 'sunrise'],
            ['🌄', 'sunrise_over_mountains'],
            ['🌠', 'stars'],
            ['🎇', 'sparkler'],
            ['🎆', 'fireworks'],
            ['🌇', 'city_sunrise'],
            ['🌆', 'city_sunset'],
            ['🏙', 'cityscape'],
            ['🌃', 'night_with_stars'],
            ['🌌', 'milky_way'],
            ['🌉', 'bridge_at_night'],
            ['🌁', 'foggy']
        ],
        name: 'Places',
        icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            function (fill, width, height) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"></path><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"></path></svg>"; }), 'car']
    },
    {
        id: 7,
        emojis: [
            ['⌚️', 'watch'],
            ['📱', 'iphone'],
            ['📲', 'calling'],
            ['💻', 'computer'],
            ['⌨️', 'keyboard'],
            ['🖥', 'desktop_computer'],
            ['🖨', 'printer'],
            ['🖱', 'computer_mouse'],
            ['🖲', 'trackball'],
            ['🕹', 'joystick'],
            ['🗜', 'clamp'],
            ['💽', 'minidisc'],
            ['💾', 'floppy_disk'],
            ['💿', 'cd'],
            ['📀', 'dvd'],
            ['📼', 'vhs'],
            ['📷', 'camera'],
            ['📸', 'camera_flash'],
            ['📹', 'video_camera'],
            ['🎥', 'movie_camera'],
            ['📽', 'film_projector'],
            ['🎞', 'film_strip'],
            ['📞', 'telephone_receiver'],
            ['☎️', 'phone'],
            ['📟', 'pager'],
            ['📠', 'fax'],
            ['📺', 'tv'],
            ['📻', 'radio'],
            ['🎙', 'studio_microphone'],
            ['🎚', 'level_slider'],
            ['🎛', 'control_knobs'],
            ['⏱', 'stopwatch'],
            ['⏲', 'timer_clock'],
            ['⏰', 'alarm_clock'],
            ['🕰', 'mantelpiece_clock'],
            ['⌛️', 'hourglass'],
            ['⏳', 'hourglass_flowing_sand'],
            ['📡', 'satellite'],
            ['🔋', 'battery'],
            ['🔌', 'electric_plug'],
            ['💡', 'bulb'],
            ['🔦', 'flashlight'],
            ['🕯', 'candle'],
            ['🗑', 'wastebasket'],
            ['🛢', 'oil_drum'],
            ['💸', 'money_with_wings'],
            ['💵', 'dollar'],
            ['💴', 'yen'],
            ['💶', 'euro'],
            ['💷', 'pound'],
            ['💰', 'moneybag'],
            ['💳', 'credit_card'],
            ['💎', 'gem'],
            ['⚖️', 'balance_scale'],
            ['🔧', 'wrench'],
            ['🔨', 'hammer'],
            ['⚒', 'hammer_and_pick'],
            ['🛠', 'hammer_and_wrench'],
            ['⛏', 'pick'],
            ['🔩', 'nut_and_bolt'],
            ['⚙️', 'gear'],
            ['⛓', 'chains'],
            ['🔫', 'gun'],
            ['💣', 'bomb'],
            ['🔪', 'hocho'],
            ['🗡', 'dagger'],
            ['⚔️', 'crossed_swords'],
            ['🛡', 'shield'],
            ['🚬', 'smoking'],
            ['⚰️', 'coffin'],
            ['⚱️', 'funeral_urn'],
            ['🏺', 'amphora'],
            ['🔮', 'crystal_ball'],
            ['📿', 'prayer_beads'],
            ['💈', 'barber'],
            ['⚗️', 'alembic'],
            ['🔭', 'telescope'],
            ['🔬', 'microscope'],
            ['🕳', 'hole'],
            ['💊', 'pill'],
            ['💉', 'syringe'],
            ['🌡', 'thermometer'],
            ['🚽', 'toilet'],
            ['🚰', 'potable_water'],
            ['🚿', 'shower'],
            ['🛁', 'bathtub'],
            ['🛀', 'bath'],
            ['🛎', 'bellhop_bell'],
            ['🔑', 'key'],
            ['🗝', 'old_key'],
            ['🚪', 'door'],
            ['🛋', 'couch_and_lamp'],
            ['🛏', 'bed'],
            ['🛌', 'sleeping_bed'],
            ['🖼', 'framed_picture'],
            ['🛍', 'shopping'],
            ['🛒', 'shopping_cart'],
            ['🎁', 'gift'],
            ['🎈', 'balloon'],
            ['🎏', 'flags'],
            ['🎀', 'ribbon'],
            ['🎊', 'confetti_ball'],
            ['🎉', 'tada'],
            ['🎎', 'dolls'],
            ['🏮', 'izakaya_lantern'],
            ['🎐', 'wind_chime'],
            ['✉️', 'email'],
            ['📩', 'envelope_with_arrow'],
            ['📨', 'incoming_envelope'],
            ['📧', 'e-mail'],
            ['💌', 'love_letter'],
            ['📥', 'inbox_tray'],
            ['📤', 'outbox_tray'],
            ['📦', 'package'],
            ['🏷', 'label'],
            ['📪', 'mailbox_closed'],
            ['📫', 'mailbox'],
            ['📬', 'mailbox_with_mail'],
            ['📭', 'mailbox_with_no_mail'],
            ['📮', 'postbox'],
            ['📯', 'postal_horn'],
            ['📜', 'scroll'],
            ['📃', 'page_with_curl'],
            ['📄', 'page_facing_up'],
            ['📑', 'bookmark_tabs'],
            ['📊', 'bar_chart'],
            ['📈', 'chart_with_upwards_trend'],
            ['📉', 'chart_with_downwards_trend'],
            ['🗒', 'spiral_notepad'],
            ['🗓', 'spiral_calendar'],
            ['📆', 'calendar'],
            ['📅', 'date'],
            ['📇', 'card_index'],
            ['🗃', 'card_file_box'],
            ['🗳', 'ballot_box'],
            ['🗄', 'file_cabinet'],
            ['📋', 'clipboard'],
            ['📁', 'file_folder'],
            ['📂', 'open_file_folder'],
            ['🗂', 'card_index_dividers'],
            ['🗞', 'newspaper_roll'],
            ['📰', 'newspaper'],
            ['📓', 'notebook'],
            ['📔', 'notebook_with_decorative_cover'],
            ['📒', 'ledger'],
            ['📕', 'closed_book'],
            ['📗', 'green_book'],
            ['📘', 'blue_book'],
            ['📙', 'orange_book'],
            ['📚', 'books'],
            ['📖', 'book'],
            ['🔖', 'bookmark'],
            ['🔗', 'link'],
            ['📎', 'paperclip'],
            ['🖇', 'paperclips'],
            ['📐', 'triangular_ruler'],
            ['📏', 'straight_ruler'],
            ['📌', 'pushpin'],
            ['📍', 'round_pushpin'],
            ['✂️', 'scissors'],
            ['🖊', 'pen'],
            ['🖋', 'fountain_pen'],
            ['✒️', 'black_nib'],
            ['🖌', 'paintbrush'],
            ['🖍', 'crayon'],
            ['📝', 'memo'],
            ['✏️', 'pencil2'],
            ['🔍', 'mag'],
            ['🔎', 'mag_right'],
            ['🔏', 'lock_with_ink_pen'],
            ['🔐', 'closed_lock_with_key'],
            ['🔒', 'lock'],
            ['🔓', 'unlock']
        ],
        name: 'Objects',
        icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            function (fill, width, height) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"></path><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"></path></svg>"; }), 'bell']
    },
    {
        id: 8,
        emojis: [
            ['❤️', 'heart'],
            ['💛', 'yellow_heart'],
            ['💚', 'green_heart'],
            ['💙', 'blue_heart'],
            ['💜', 'purple_heart'],
            ['🖤', 'black_heart'],
            ['💔', 'broken_heart'],
            ['❣️', 'heavy_heart_exclamation'],
            ['💕', 'two_hearts'],
            ['💞', 'revolving_hearts'],
            ['💓', 'heartbeat'],
            ['💗', 'heartpulse'],
            ['💖', 'sparkling_heart'],
            ['💘', 'cupid'],
            ['💝', 'gift_heart'],
            ['💟', 'heart_decoration'],
            ['☮️', 'peace_symbol'],
            ['✝️', 'latin_cross'],
            ['☪️', 'star_and_crescent'],
            ['🕉', 'om'],
            ['☸️', 'wheel_of_dharma'],
            ['✡️', 'star_of_david'],
            ['🔯', 'six_pointed_star'],
            ['🕎', 'menorah'],
            ['☯️', 'yin_yang'],
            ['☦️', 'orthodox_cross'],
            ['🛐', 'place_of_worship'],
            ['⛎', 'ophiuchus'],
            ['♈️', 'aries'],
            ['♉️', 'taurus'],
            ['♊️', 'gemini'],
            ['♋️', 'cancer'],
            ['♌️', 'leo'],
            ['♍️', 'virgo'],
            ['♎️', 'libra'],
            ['♏️', 'scorpius'],
            ['♐️', 'sagittarius'],
            ['♑️', 'capricorn'],
            ['♒️', 'aquarius'],
            ['♓️', 'pisces'],
            ['🆔', 'id'],
            ['⚛️', 'atom_symbol'],
            ['🉑', 'accept'],
            ['☢️', 'radioactive'],
            ['☣️', 'biohazard'],
            ['📴', 'mobile_phone_off'],
            ['📳', 'vibration_mode'],
            ['🈶', 'u6709'],
            ['🈚️', 'u7121'],
            ['🈸', 'u7533'],
            ['🈺', 'u55b6'],
            ['🈷️', 'u6708'],
            ['✴️', 'eight_pointed_black_star'],
            ['🆚', 'vs'],
            ['💮', 'white_flower'],
            ['🉐', 'ideograph_advantage'],
            ['㊙️', 'secret'],
            ['㊗️', 'congratulations'],
            ['🈴', 'u5408'],
            ['🈵', 'u6e80'],
            ['🈹', 'u5272'],
            ['🈲', 'u7981'],
            ['🅰️', 'a'],
            ['🅱️', 'b'],
            ['🆎', 'ab'],
            ['🆑', 'cl'],
            ['🅾️', 'o2'],
            ['🆘', 'sos'],
            ['❌', 'x'],
            ['⭕️', 'o'],
            ['🛑', 'stop_sign'],
            ['⛔️', 'no_entry'],
            ['📛', 'name_badge'],
            ['🚫', 'no_entry_sign'],
            ['💯', '100'],
            ['💢', 'anger'],
            ['♨️', 'hotsprings'],
            ['🚷', 'no_pedestrians'],
            ['🚯', 'do_not_litter'],
            ['🚳', 'no_bicycles'],
            ['🚱', 'non-potable_water'],
            ['🔞', 'underage'],
            ['📵', 'no_mobile_phones'],
            ['🚭', 'no_smoking'],
            ['❗️', 'exclamation'],
            ['❕', 'grey_exclamation'],
            ['❓', 'question'],
            ['❔', 'grey_question'],
            ['‼️', 'bangbang'],
            ['⁉️', 'interrobang'],
            ['🔅', 'low_brightness'],
            ['🔆', 'high_brightness'],
            ['〽️', 'part_alternation_mark'],
            ['⚠️', 'warning'],
            ['🚸', 'children_crossing'],
            ['🔱', 'trident'],
            ['⚜️', 'fleur_de_lis'],
            ['🔰', 'beginner'],
            ['♻️', 'recycle'],
            ['✅', 'white_check_mark'],
            ['🈯️', 'u6307'],
            ['💹', 'chart'],
            ['❇️', 'sparkle'],
            ['✳️', 'eight_spoked_asterisk'],
            ['❎', 'negative_squared_cross_mark'],
            ['🌐', 'globe_with_meridians'],
            ['💠', 'diamond_shape_with_a_dot_inside'],
            ['Ⓜ️', 'm'],
            ['🌀', 'cyclone'],
            ['💤', 'zzz'],
            ['🏧', 'atm'],
            ['🚾', 'wc'],
            ['♿️', 'wheelchair'],
            ['🅿️', 'parking'],
            ['🈳', 'u7a7a'],
            ['🈂️', 'sa'],
            ['🛂', 'passport_control'],
            ['🛃', 'customs'],
            ['🛄', 'baggage_claim'],
            ['🛅', 'left_luggage'],
            ['🚹', 'mens'],
            ['🚺', 'womens'],
            ['🚼', 'baby_symbol'],
            ['🚻', 'restroom'],
            ['🚮', 'put_litter_in_its_place'],
            ['🎦', 'cinema'],
            ['📶', 'signal_strength'],
            ['🈁', 'koko'],
            ['🔣', 'symbols'],
            ['ℹ️', 'information_source'],
            ['🔤', 'abc'],
            ['🔡', 'abcd'],
            ['🔠', 'capital_abcd'],
            ['🆖', 'ng'],
            ['🆗', 'ok'],
            ['🆙', 'up'],
            ['🆒', 'cool'],
            ['🆕', 'new'],
            ['🆓', 'free'],
            ['0️⃣', 'zero'],
            ['1️⃣', 'one'],
            ['2️⃣', 'two'],
            ['3️⃣', 'three'],
            ['4️⃣', 'four'],
            ['5️⃣', 'five'],
            ['6️⃣', 'six'],
            ['7️⃣', 'seven'],
            ['8️⃣', 'eight'],
            ['9️⃣', 'nine'],
            ['🔟', 'keycap_ten'],
            ['🔢', '1234'],
            ['#️⃣', 'hash'],
            ['*️⃣', 'asterisk'],
            ['▶️', 'arrow_forward'],
            ['⏸', 'pause_button'],
            ['⏯', 'play_or_pause_button'],
            ['⏹', 'stop_button'],
            ['⏺', 'record_button'],
            ['⏭', 'next_track_button'],
            ['⏮', 'previous_track_button'],
            ['⏩', 'fast_forward'],
            ['⏪', 'rewind'],
            ['⏫', 'arrow_double_up'],
            ['⏬', 'arrow_double_down'],
            ['◀️', 'arrow_backward'],
            ['🔼', 'arrow_up_small'],
            ['🔽', 'arrow_down_small'],
            ['➡️', 'arrow_right'],
            ['⬅️', 'arrow_left'],
            ['⬆️', 'arrow_up'],
            ['⬇️', 'arrow_down'],
            ['↗️', 'arrow_upper_right'],
            ['↘️', 'arrow_lower_right'],
            ['↙️', 'arrow_lower_left'],
            ['↖️', 'arrow_upper_left'],
            ['↕️', 'arrow_up_down'],
            ['↔️', 'left_right_arrow'],
            ['↪️', 'arrow_right_hook'],
            ['↩️', 'leftwards_arrow_with_hook'],
            ['⤴️', 'arrow_heading_up'],
            ['⤵️', 'arrow_heading_down'],
            ['🔀', 'twisted_rightwards_arrows'],
            ['🔁', 'repeat'],
            ['🔂', 'repeat_one'],
            ['🔄', 'arrows_counterclockwise'],
            ['🔃', 'arrows_clockwise'],
            ['🎵', 'musical_note'],
            ['🎶', 'notes'],
            ['➕', 'heavy_plus_sign'],
            ['➖', 'heavy_minus_sign'],
            ['➗', 'heavy_division_sign'],
            ['✖️', 'heavy_multiplication_x'],
            ['💲', 'heavy_dollar_sign'],
            ['💱', 'currency_exchange'],
            ['™️', 'tm'],
            ['©️', 'copyright'],
            ['®️', 'registered'],
            ['〰️', 'wavy_dash'],
            ['➰', 'curly_loop'],
            ['➿', 'loop'],
            ['🔚', 'end'],
            ['🔙', 'back'],
            ['🔛', 'on'],
            ['🔝', 'top'],
            ['🔜', 'soon'],
            ['✔️', 'heavy_check_mark'],
            ['☑️', 'ballot_box_with_check'],
            ['🔘', 'radio_button'],
            ['⚪️', 'white_circle'],
            ['⚫️', 'black_circle'],
            ['🔴', 'red_circle'],
            ['🔵', 'large_blue_circle'],
            ['🔺', 'small_red_triangle'],
            ['🔻', 'small_red_triangle_down'],
            ['🔸', 'small_orange_diamond'],
            ['🔹', 'small_blue_diamond'],
            ['🔶', 'large_orange_diamond'],
            ['🔷', 'large_blue_diamond'],
            ['🔳', 'white_square_button'],
            ['🔲', 'black_square_button'],
            ['▪️', 'black_small_square'],
            ['▫️', 'white_small_square'],
            ['◾️', 'black_medium_small_square'],
            ['◽️', 'white_medium_small_square'],
            ['◼️', 'black_medium_square'],
            ['◻️', 'white_medium_square'],
            ['⬛️', 'black_large_square'],
            ['⬜️', 'white_large_square'],
            ['🔈', 'speaker'],
            ['🔇', 'mute'],
            ['🔉', 'sound'],
            ['🔊', 'loud_sound'],
            ['🔔', 'bell'],
            ['🔕', 'no_bell'],
            ['📣', 'mega'],
            ['📢', 'loudspeaker'],
            ['👁‍🗨', 'eye_speech_bubble'],
            ['💬', 'speech_balloon'],
            ['💭', 'thought_balloon'],
            ['🗯', 'right_anger_bubble'],
            ['♠️', 'spades'],
            ['♣️', 'clubs'],
            ['♥️', 'hearts'],
            ['♦️', 'diamonds'],
            ['🃏', 'black_joker'],
            ['🎴', 'flower_playing_cards'],
            ['🀄️', 'mahjong'],
            ['🕐', 'clock1'],
            ['🕑', 'clock2'],
            ['🕒', 'clock3'],
            ['🕓', 'clock4'],
            ['🕔', 'clock5'],
            ['🕕', 'clock6'],
            ['🕖', 'clock7'],
            ['🕗', 'clock8'],
            ['🕘', 'clock9'],
            ['🕙', 'clock10'],
            ['🕚', 'clock11'],
            ['🕛', 'clock12'],
            ['🕜', 'clock130'],
            ['🕝', 'clock230'],
            ['🕞', 'clock330'],
            ['🕟', 'clock430'],
            ['🕠', 'clock530'],
            ['🕡', 'clock630'],
            ['🕢', 'clock730'],
            ['🕣', 'clock830'],
            ['🕤', 'clock930'],
            ['🕥', 'clock1030'],
            ['🕦', 'clock1130'],
            ['🕧', 'clock1230']
        ],
        name: 'Symbols',
        icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            function (fill, width, height) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"></path></svg>"; }), 'capital_abcd']
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EMOS = [
    { name: 'Emoji', icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            function (fill, width, height) { return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"></path></svg>"; }), 'Emoji'] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxEmojComponent = /** @class */ (function () {
    function NgxEmojComponent() {
        this.DEFAULTS = DEFAULTS;
        this.onemojipick = new EventEmitter;
        this.onchardelete = new EventEmitter;
        // Initially  apply default config...
        this.theme = {};
        this.emojiCategories = [];
        // list of emos type, e.g emoji, gifs, stickers...
        this.emos = [];
        this.hideFooter = false;
    }
    /**
     * @return {?}
     */
    NgxEmojComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Set recent emoji store key...
        this.emojiDBKey = this.recentEmojiStoreKey || DEFAULTS.recentEmojiStoreKey;
        // Get recent emojis..
        this.emojiDB = window.localStorage.getItem(this.emojiDBKey);
        if (this.emojiDB) {
            this.emojiDB = JSON.parse(this.emojiDB);
        }
        else {
            // no stored recent emoji, save in the store array ...
            this.emojiDB = [];
            window.localStorage.setItem(this.emojiDBKey, JSON.stringify(this.emojiDB));
        }
        this.activeCategory = 'People';
        // get the emoji categories
        this.emojiCategories = EMOJIS.slice(1).map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return { name: value.name, icon: value.icon };
        }));
        // filter to set defaults
        this.activeEmojiSet = EMOJIS.slice(1).filter((/**
         * @param {?} category
         * @return {?}
         */
        function (category) {
            if (category.name === _this.activeCategory) {
                return category;
            }
        }));
        this.activeIndex = this.activeEmojiSet[0].id;
        // console.log('Initial Emo Index:', this.activeIndex);
        this.activeEmojiSet = this.activeEmojiSet[0].emojis;
        this.activeEmo = 'Emoji';
        // collate the emos type
        this.emos = EMOS.map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return { name: value.name, icon: value.icon };
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleCategoryChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        // set active category name...
        this.activeCategory = e.name;
        if (e.name === 'Recent') {
            // If recent category, set emoji to emojis in the recent store...
            this.activeIndex = EMOJIS[1].id;
            this.activeEmojiSet = this.emojiDB;
        }
        else if (e.name === 'Search') {
            this.activeIndex = EMOJIS[0].id;
            this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
        }
        else {
            // filter to set current emoji set...
            this.activeEmojiSet = EMOJIS.filter((/**
             * @param {?} category
             * @return {?}
             */
            function (category) {
                if (category.name === _this.activeCategory) {
                    return category;
                }
            }));
            // update the index on manual change...
            this.activeIndex = this.activeEmojiSet[0].id;
            this.activeEmojiSet = this.activeEmojiSet[0].emojis;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleEmoChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.activeEmo = e.name;
        // collate the emos type
        //   this.emos = EMOS.map((value) => {
        //    return {name: value.name, icon: value.icon};
        //  });
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxEmojComponent.prototype.checkIfEmojiExistsInEmojiDB = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var emo_exists = false;
        // checks if emoji is already in recent emoji db store...
        for (var i = 0; i < this.emojiDB.length; i++) {
            if (this.emojiDB[i][1] === name) {
                emo_exists = true;
                break;
            }
        }
        return emo_exists;
    };
    /**
     * @param {?} emoji
     * @return {?}
     */
    NgxEmojComponent.prototype.addEmojiToRecentEmojiDB = /**
     * @param {?} emoji
     * @return {?}
     */
    function (emoji) {
        // check if there is no duplicate
        if (!this.checkIfEmojiExistsInEmojiDB(emoji[1])) {
            // recent emoji greater than the number of max, remove the first emoji and add new one
            // to the back...
            if (this.emojiDB.length < (this.maxRecentEmoji || DEFAULTS.maxRecentEmoji)) {
                this.emojiDB.push(emoji);
                window.localStorage.setItem(this.emojiDBKey, JSON.stringify(this.emojiDB));
            }
            else {
                this.emojiDB.splice(0, 1);
                this.emojiDB.push(emoji);
                window.localStorage.setItem(this.emojiDBKey, JSON.stringify(this.emojiDB));
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleEmojiPick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // save the picked emoji inside recent emoji DB
        this.addEmojiToRecentEmojiDB(e.emoji);
        this.onemojipick.emit({ char: e.emoji[0], name: e.emoji[1] });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleCharDelete = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onchardelete.emit({ deleteChar: true });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleContentScroll = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // console.log('emitted', e.scrollTop, e.scrollHeight);
        if ((e.scrollHeight - e.scrollTop) <= 400) {
            // console.log('almost at the end');
            this.hideFooter = true;
        }
        else {
            // console.log('tooping the scroll');
            this.hideFooter = false;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleContentSwipe = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var currentIndex = this.activeIndex;
        /** @type {?} */
        var direction = e.direction;
        // Log the necessary details...
        if (direction === 'left') {
            /** @type {?} */
            var prev_1 = currentIndex - 1;
            if (prev_1 >= 0) {
                if (prev_1 === 0) {
                    // search
                    this.activeIndex = EMOJIS[0].id;
                    this.activeCategory = EMOJIS[0].name;
                    this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
                }
                else if (prev_1 === 1) {
                    // recent
                    this.activeIndex = EMOJIS[1].id;
                    this.activeCategory = EMOJIS[1].name;
                    this.activeEmojiSet = this.emojiDB;
                }
                else {
                    /** @type {?} */
                    var prevCategoryData = EMOJIS.filter((/**
                     * @param {?} category
                     * @return {?}
                     */
                    function (category) {
                        if (category.id === prev_1) {
                            return category;
                        }
                    }));
                    // set the values...
                    this.activeIndex = prev_1;
                    this.activeCategory = prevCategoryData[0].name;
                    this.activeEmojiSet = prevCategoryData[0].emojis;
                }
            }
        }
        else if (direction === 'right') {
            /** @type {?} */
            var next_1 = currentIndex + 1;
            if (next_1 === 0) {
                // search
                this.activeIndex = EMOJIS[0].id;
                this.activeCategory = EMOJIS[0].name;
                this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
            }
            else if (next_1 === 1) {
                // recent
                this.activeIndex = EMOJIS[1].id;
                this.activeEmojiSet = this.emojiDB;
                this.activeCategory = EMOJIS[1].name;
            }
            else {
                if (next_1 <= (EMOJIS.length - 1)) {
                    /** @type {?} */
                    var prevCategoryData = EMOJIS.filter((/**
                     * @param {?} category
                     * @return {?}
                     */
                    function (category) {
                        if (category.id === next_1) {
                            return category;
                        }
                    }));
                    // set the values...
                    this.activeIndex = next_1;
                    this.activeCategory = prevCategoryData[0].name;
                    this.activeEmojiSet = prevCategoryData[0].emojis;
                }
            }
        }
    };
    NgxEmojComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj',
                    template: "\n    <div class=\"ngx-emoji-mart\"\n      [ngStyle]=\"\n      {'background-color': (theme.martBG || DEFAULTS.martBG),\n       'width': (width || DEFAULTS.martWidth),\n       'height': (height || DEFAULTS.martHeight),\n       'font-family': (theme.martFontFamily || DEFAULTS.martFontFamily),\n       'border-radius': (theme.martBorderRadius || DEFAULTS.martBorderRadius)}\">\n      <ngx-emoj-header\n        *ngIf=\"theme.martShowHeader\"\n        [headerBG]=\"(theme.martHeaderBG || DEFAULTS.martHeaderBG)\"\n        [headerFG]=\"(theme.martHeaderFG || DEFAULTS.martHeaderFG)\"\n        [headerFontSize]=\"(theme.martHeaderFontSize || DEFAULTS.martHeaderFontSize)\"\n        [headerPadding]=\"(theme.martHeaderPadding || DEFAULTS.martHeaderPadding)\"\n        [defaultActiveCategory]=\"'People'\"\n        [activeCategory]=\"activeCategory\"\n        (oncategorychange)=\"handleCategoryChange($event)\"\n        [martCategoryFontSize]=\"(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)\"\n        [martCategoryColor]=\"(theme.martCategoryColor || DEFAULTS.martCategoryColor)\"\n        [martCategoryColorActive]=\"(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)\"\n        [activeIndicatorColor]=\"(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)\"\n        [activeIndicatorHeight]=\"(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)\"\n        [emojiCategories]=\"emojiCategories\">\n      </ngx-emoj-header>\n\n      <ngx-emoj-category-content\n      [categoryName]=\"activeCategory\"\n      [categoryEmojiSet]=\"activeEmojiSet\"\n      [activeIndex]=\"activeIndex\"\n      [martEmojiNotFoundFG]=\"(theme.martEmojiNotFoundFG || DEFAULTS.martEmojiNotFoundFG)\"\n      [emojiNotFoundText]=\"(emojiNotFoundText || DEFAULTS.emojiNotFoundText)\"\n      [searchBoxStyle]=\"(theme.martSearchBoxStyle || DEFAULTS.martSearchBoxStyle)\"\n      [searchEmojiPlaceholderText]=\"(searchEmojiPlaceholderText || DEFAULTS.searchEmojiPlaceholderText)\"\n      [emojiBtnPadding]=\"(theme.martEmojiPadding || DEFAULTS.martEmojiPadding)\"\n      [emojiFontSize]=\"(theme.martEmojiFontSize || DEFAULTS.martEmojiFontSize)\"\n      [martEmojiContentPaddingLeft]=\"(theme.martEmojiContentPaddingLeft || DEFAULTS.martEmojiContentPaddingLeft)\"\n      (onpickemoji)=\"handleEmojiPick($event)\"\n      (oncontentSwipe)=\"handleContentSwipe($event)\"\n      (oncontentscroll)=\"handleContentScroll($event)\">\n      </ngx-emoj-category-content>\n      <ngx-emoj-footer\n      *ngIf=\"theme.martShowFooter\"\n      [footerBG]=\"(theme.martFooterBG || DEFAULTS.martFooterBG)\"\n      [footerFG]=\"(theme.martFooterFG || DEFAULTS.martFooterFG)\"\n      [footerFontSize]=\"(theme.martFooterFontSize || DEFAULTS.martFooterFontSize)\"\n      [footerPadding]=\"(theme.martFooterPadding || DEFAULTS.martFooterPadding)\"\n      [defaultActiveEmo]=\"'Emoji'\"\n      (onchardelete)=\"handleCharDelete($event)\"\n      (onemochange)=\"handleEmoChange($event)\"\n      [martCategoryFontSize]=\"(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)\"\n      [martCategoryColor]=\"(theme.martCategoryColor || DEFAULTS.martCategoryColor)\"\n      [martCategoryColorActive]=\"(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)\"\n      [activeIndicatorColor]=\"(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)\"\n      [activeIndicatorHeight]=\"(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)\"\n      [emos]=\"emos\"\n      [hideFooter]=\"hideFooter\">\n    </ngx-emoj-footer>\n\n    </div>\n  ",
                    styles: ["\n\n    .ngx-emoji-mart\n    {\n      position: relative;\n      margin: 0;\n      margin-bottom: 10px;\n      padding: 0px;\n      box-sizing: border-box;\n      overflow: hidden;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojComponent.ctorParameters = function () { return []; };
    NgxEmojComponent.propDecorators = {
        width: [{ type: Input }],
        height: [{ type: Input }],
        onemojipick: [{ type: Output }],
        onchardelete: [{ type: Output }],
        theme: [{ type: Input }],
        maxRecentEmoji: [{ type: Input }],
        recentEmojiStoreKey: [{ type: Input }],
        searchEmojiPlaceholderText: [{ type: Input }],
        emojiNotFoundText: [{ type: Input }]
    };
    return NgxEmojComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxEmojHeaderComponent = /** @class */ (function () {
    function NgxEmojHeaderComponent() {
        this.oncategorychange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxEmojHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.activeCategory) {
            this.activeCategory = this.defaultActiveCategory;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojHeaderComponent.prototype.onCategorySelect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.activeCategory = e.name;
        this.oncategorychange.emit({ name: e.name });
    };
    NgxEmojHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-header',
                    template: "\n    <div\n      class=\"ngx-emoj-header\"\n      [ngStyle]=\"{'background-color': headerBG,\n                  'color': headerFG,\n                  'font-size': headerFontSize,\n                  'padding': headerPadding.y+' '+headerPadding.x}\">\n\n                  <ngx-emoj-category *ngFor=\"let c of emojiCategories\"\n                   [categoryIcon]=\"c.icon[0]\"\n                   [categoryIconColor]=\"'white'\"\n                   [categoryName]=\"c.name\"\n                   [martCategoryFontSize]=\"martCategoryFontSize\"\n                   [martCategoryColor]=\"martCategoryColor\"\n                   [martCategoryColorActive]=\"martCategoryColorActive\"\n                   [activeIndicatorColor]=\"activeIndicatorColor\"\n                   [activeIndicatorHeight]=\"activeIndicatorHeight\"\n                   [active]=\"activeCategory === c.name\"\n                   (onselect)=\"onCategorySelect($event)\"\n                   [ngStyle]=\"{'width': '26.22px'}\">\n                  </ngx-emoj-category>\n    </div>\n  ",
                    styles: ["\n\n  .ngx-emoj-header\n  {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojHeaderComponent.ctorParameters = function () { return []; };
    NgxEmojHeaderComponent.propDecorators = {
        headerBG: [{ type: Input }],
        headerFG: [{ type: Input }],
        headerFontSize: [{ type: Input }],
        headerPadding: [{ type: Input }],
        emojiCategories: [{ type: Input }],
        activeIndicatorColor: [{ type: Input }],
        activeIndicatorHeight: [{ type: Input }],
        defaultActiveCategory: [{ type: Input }],
        martCategoryFontSize: [{ type: Input }],
        martCategoryColor: [{ type: Input }],
        martCategoryColorActive: [{ type: Input }],
        activeCategory: [{ type: Input }],
        oncategorychange: [{ type: Output }]
    };
    return NgxEmojHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxEmojFooterComponent = /** @class */ (function () {
    function NgxEmojFooterComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.onemochange = new EventEmitter();
        this.onchardelete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxEmojFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.activeEmo = this.defaultActiveEmo;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojFooterComponent.prototype.onEmoSelect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.activeEmo = e.name;
        this.onemochange.emit({ name: e.name });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojFooterComponent.prototype.deleteChar = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onchardelete.emit({ deleteChar: true });
    };
    /**
     * @param {?} fill
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    NgxEmojFooterComponent.prototype.delButton = /**
     * @param {?} fill
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (fill, width, height) {
        return "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.374 511.374\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\" style=\"enable-background:new 0 0 511.374 511.374\" xml:space=\"preserve\"><g><g><path d=\"M433.134,47.687h-213.28c-37.109,0.21-72.235,16.778-96,45.28l-1.44,1.6l-115.2,140.8c-9.619,11.779-9.619,28.701,0,40.48l115.36,141.92c23.6,28.794,58.771,45.618,96,45.92h216.16c41.414-2.536,74.363-35.691,76.64-77.12c0-0.96,0-1.92,0-2.88v-257.12C510.781,83.499,476.196,48.631,433.134,47.687z M447.374,382.567c-0.428,9.583-8.327,17.13-17.92,17.12h-208c-19.662,0.779-38.49-7.979-50.56-23.52l-98.24-120.48l97.92-119.68c11.851-15.727,30.553-24.78,50.24-24.32h209.6c11.04,0,16,6.4,16.96,16V382.567z\"/></g></g><g><g><path d=\"M373.934,296.967l-11.52-11.52c-12.504-12.504-32.776-12.504-45.28,0s-12.504,32.776,0,45.28l11.52,11.52c12.504,12.504,32.776,12.504,45.28,0S386.438,309.471,373.934,296.967z\"/></g></g><g><g><path d=\"M373.934,169.127c-12.504-12.504-32.776-12.504-45.28,0h0.16l-41.44,41.28l-41.44-41.44c-12.504-12.504-32.776-12.504-45.28,0s-12.504,32.776,0,45.28l41.44,41.44l-41.44,41.44c-12.504,12.504-12.504,32.776,0,45.28s32.776,12.504,45.28,0l128-128C386.438,201.903,386.438,181.631,373.934,169.127z\"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";
    };
    NgxEmojFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-footer',
                    template: "\n    <div\n      class=\"ngx-emoj-footer\"\n      [class.unveal]=\"hideFooter\"\n      [class.reveal]=\"!hideFooter\"\n      [ngStyle]=\"{'background-color': footerBG,\n                  'color': footerFG,\n                  'font-size': footerFontSize,\n                  'padding': footerPadding.y+' '+footerPadding.x}\">\n\n                  <div class=\"l\">\n                        <button\n                        class=\"emos-btn\"\n                *ngFor=\"let e of emos\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(\n                          e.icon[0](((e.name == activeEmo ) ? martCategoryColorActive : martCategoryColor),\n                                       martCategoryFontSize, martCategoryFontSize))\">\n                        </button>\n                  </div>\n                  <div class=\"r\">\n                      <button class=\"emos-btn\"\n                          (click)=\"deleteChar($event)\"\n                          [ngStyle]=\"{'color': martCategoryColor}\"\n                          [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(\n                            delButton(martCategoryColor, martCategoryFontSize, martCategoryFontSize))\">\n                      </button>\n                  </div>\n    </div>\n  ",
                    styles: ["\n   .ngx-emoj-footer\n  {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n  }\n  .ngx-emoj-footer .l\n  {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 85%;\n  }\n  .ngx-emoj-footer .r\n  {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 15%;\n  }\n\n  .emos-btn\n  {\n    background: transparent;\n    padding: 15px 10% 10px 10%;\n    border: none;\n    outline: none;\n    padding-left: 10%;\n    padding-right: 10%;\n    border: none;\n  }\n\n\n  .reveal\n  {\n    animation-name: reveal;\n    animation-duration: .3s;\n    animation-fill-mode: forwards;\n  }\n\n\n  .unveal\n  {\n    animation-name: unveal;\n    animation-duration: .5s;\n    animation-fill-mode: forwards;\n  }\n\n  @keyframes unveal\n  {\n    from\n    {\n      opacity: 1;\n      bottom: 0;\n    }\n\n    to\n    {\n      opacity: 0;\n      bottom: -150px;\n    }\n  }\n\n  @keyframes reveal\n  {\n\n    from\n    {\n      opacity: 0;\n      bottom: -150px;\n    }\n\n    to\n    {\n      opacity: 1;\n      bottom: 0;\n    }\n  }\n\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojFooterComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    NgxEmojFooterComponent.propDecorators = {
        footerBG: [{ type: Input }],
        footerFG: [{ type: Input }],
        footerFontSize: [{ type: Input }],
        footerPadding: [{ type: Input }],
        emos: [{ type: Input }],
        activeIndicatorColor: [{ type: Input }],
        activeIndicatorHeight: [{ type: Input }],
        defaultActiveEmo: [{ type: Input }],
        onemochange: [{ type: Output }],
        martCategoryFontSize: [{ type: Input }],
        martCategoryColor: [{ type: Input }],
        martCategoryColorActive: [{ type: Input }],
        onchardelete: [{ type: Output }],
        hideFooter: [{ type: Input }]
    };
    return NgxEmojFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxEmojCategoryComponent = /** @class */ (function () {
    function NgxEmojCategoryComponent(sanitizer, cdRef) {
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.onselect = new EventEmitter;
    }
    /**
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setInnerHtml();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.active.previousValue !== changes.active.currentValue) {
            this.setInnerHtml();
            this.cdRef.markForCheck();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.selectCategory = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        this.onselect.emit({ name: this.categoryName, icon: this.categoryIcon });
    };
    /**
     * @private
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.setInnerHtml = /**
     * @private
     * @return {?}
     */
    function () {
        this.safeSvgComponent = this.sanitizer.bypassSecurityTrustHtml(this.categoryIcon(((this.active) ? this.martCategoryColorActive : this.martCategoryColor), this.martCategoryFontSize, this.martCategoryFontSize));
    };
    NgxEmojCategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-category',
                    template: "\n    <button (click)=\"selectCategory($event)\" class=\"ngx-emoji-category-btn\"\n    [ngStyle]=\"{'color': categoryIconColor,\n                'border-width': activeIndicatorHeight,\n                'border-color': (active) ? activeIndicatorColor : 'transparent'}\"\n                [innerHTML]=safeSvgComponent>\n    </button>\n  ",
                    styles: ["\n  .ngx-emoji-category-btn\n  {\n    background: transparent;\n    padding: 15px 10% 10px 10%;\n    border: none;\n    outline: none;\n    border-bottom: 2px solid transparent;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojCategoryComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ChangeDetectorRef }
    ]; };
    NgxEmojCategoryComponent.propDecorators = {
        categoryIcon: [{ type: Input }],
        categoryName: [{ type: Input }],
        categoryIconColor: [{ type: Input }],
        activeIndicatorColor: [{ type: Input }],
        activeIndicatorHeight: [{ type: Input }],
        martCategoryFontSize: [{ type: Input }],
        martCategoryColor: [{ type: Input }],
        martCategoryColorActive: [{ type: Input }],
        active: [{ type: Input }],
        onselect: [{ type: Output }]
    };
    return NgxEmojCategoryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxEmojCategoryContentComponent = /** @class */ (function () {
    function NgxEmojCategoryContentComponent() {
        this.onpickemoji = new EventEmitter;
        this.oncontentscroll = new EventEmitter;
        this.oncontentSwipe = new EventEmitter;
        this.searchSet = [];
        this.recentEmosForSearch = [];
        this.initialEmoj = false;
        this.notFound = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojCategoryContentComponent.prototype.search = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.initialEmoj) {
            // save the recent emojs
            this.recentEmosForSearch = this.categoryEmojiSet;
            /** @type {?} */
            var searchSet = [];
            for (var i = 2; i < EMOJIS.length; i++) {
                searchSet = searchSet.concat(EMOJIS[i].emojis);
            }
            this.searchSet = searchSet;
            this.initialEmoj = true;
        }
        /** @type {?} */
        var query = e.target.value.toLowerCase();
        if (query && query.trim() !== '') {
            this.categoryEmojiSet = this.searchSet.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item[1].toLowerCase().indexOf(query) > -1) {
                    return item;
                }
            }));
        }
        else {
            this.categoryEmojiSet = this.recentEmosForSearch;
        }
        if (this.categoryEmojiSet.length === 0) {
            this.notFound = true;
        }
        else {
            this.notFound = false;
        }
    };
    /**
     * @param {?} emoji
     * @return {?}
     */
    NgxEmojCategoryContentComponent.prototype.pickEmoji = /**
     * @param {?} emoji
     * @return {?}
     */
    function (emoji) {
        this.onpickemoji.emit({
            emoji: emoji
        });
    };
    NgxEmojCategoryContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-category-content',
                    template: "\n    <div class=\"ngx-emoji-not-found\" *ngIf=\"activeIndex === 0 && notFound == true\"\n    [ngStyle]=\"{\n    'color': martEmojiNotFoundFG\n    }\">\n    {{ emojiNotFoundText }}\n    </div>\n  <div class=\"ngx-emoji-category-content\"\n       [ngStyle]=\"{'padding': '0px 5px 5px ' + martEmojiContentPaddingLeft, 'height': activeIndex === 0? '70%':'85%'}\"\n       #emojiContainer>\n\n      <div class=\"emoji-btn-container\"\n        *ngFor=\"let emo of categoryEmojiSet\" [ngStyle]=\"{'height': emojiBtnPadding.y,\n                                                         'width': emojiBtnPadding.x   }\">\n          <button (click)=\"pickEmoji(emo)\" class=\"ngx-emoji-emoj-btn\"\n          [ngStyle]=\"{'font-size': emojiFontSize}\">\n      {{ emo[0] }}\n    </button>\n      </div>\n  </div>\n  ",
                    styles: ["\n  .ngx-emoji-not-found\n  {\n    display: table;\n    margin: 60px auto;\n    font-size: 15px;\n    font-family: sans-serif;\n  }\n\n  .ngx-emoji-search\n  {\n    width: 87%;\n    display: table;\n    border: 1px solid;\n    padding: 5px 10px;\n    height: 30px;\n    font-family: sans-serif;\n    margin: 15px auto 10px auto;\n    outline: none;\n  }\n\n  .ngx-emoji-category-content\n  {\n    overflow-y: scroll;\n    width: 100% !important;\n    display: flex;\n    flex-wrap: wrap;\n    text-align: left;\n    align-content: flex-start;\n    justify-content: flex-start;\n  }\n\n  .emoji-btn-container\n  {\n    display: flex;\n    overflow: hidden;\n  }\n  .ngx-emoji-emoj-btn\n  {\n    background: transparent;\n    margin: auto;\n    border: none;\n    outline: none;\n    cursor: pointer;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojCategoryContentComponent.ctorParameters = function () { return []; };
    NgxEmojCategoryContentComponent.propDecorators = {
        categoryName: [{ type: Input }],
        categoryEmojiSet: [{ type: Input }],
        activeIndex: [{ type: Input }],
        emojiBtnPadding: [{ type: Input }],
        emojiFontSize: [{ type: Input }],
        searchEmojiPlaceholderText: [{ type: Input }],
        searchBoxStyle: [{ type: Input }],
        emojiNotFoundText: [{ type: Input }],
        martEmojiNotFoundFG: [{ type: Input }],
        martEmojiContentPaddingLeft: [{ type: Input }],
        onpickemoji: [{ type: Output }],
        oncontentscroll: [{ type: Output }],
        oncontentSwipe: [{ type: Output }],
        emojiContainer: [{ type: ViewChild, args: ['emojiContainer',] }]
    };
    return NgxEmojCategoryContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxEmojModule = /** @class */ (function () {
    function NgxEmojModule() {
    }
    NgxEmojModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NgxEmojComponent,
                        NgxEmojHeaderComponent,
                        NgxEmojCategoryComponent,
                        NgxEmojCategoryContentComponent,
                        NgxEmojFooterComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [NgxEmojComponent,
                        NgxEmojHeaderComponent,
                        NgxEmojCategoryComponent,
                        NgxEmojCategoryContentComponent,
                        NgxEmojFooterComponent],
                    providers: [],
                    entryComponents: [NgxEmojComponent]
                },] }
    ];
    return NgxEmojModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxEmojComponent, NgxEmojModule, NgxEmojCategoryContentComponent as ɵc, NgxEmojCategoryComponent as ɵb, NgxEmojFooterComponent as ɵd, NgxEmojHeaderComponent as ɵa };

//# sourceMappingURL=loop-emoji.js.map