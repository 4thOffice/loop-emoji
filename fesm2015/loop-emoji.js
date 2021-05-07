import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild, Renderer2, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULTS = {
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
    },
    martDefaultActiveCategory: 'People'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EMOJIS = [
    { id: 0, name: 'Search', icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            (fill, width, height) => { return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="${fill}" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>`; }), 'Search'] },
    { id: 1, name: 'Recent', icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            (fill, width, height) => { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${fill}"><path d="M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"></path><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path></svg>`; }), 'Recent'] },
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
            ['😡', 'rage, mad'],
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
            ['😢', 'cry, sad'],
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
            ['😈', 'smiling_imp, devil'],
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
            ['👍', '+1, thumbs_up'],
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
            (fill, width, height) => { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${fill}"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path></svg>`; }), 'smile']
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
            ['🍀', 'four_leaf_clover, luck'],
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
            (fill, height, width) => { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${fill}"><path d="M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"></path><path d="M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"></path></svg>`; }), 'cherry_blossom']
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
            (fill, width, height) => { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${fill}"><path d="M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"></path></svg>`; }), 'hamburger']
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
            (fill, height, width) => { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${fill}"><path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"></path></svg>`; }), 'soccer']
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
            (fill, width, height) => { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${fill}"><path d="M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"></path><path d="M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"></path></svg>`; }), 'car']
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
            (fill, width, height) => { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${fill}"><path d="M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"></path><path d="M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"></path></svg>`; }), 'bell']
    },
    {
        id: 8,
        emojis: [
            ['❤️', 'heart, love'],
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
            (fill, width, height) => { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${fill}"><path d="M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"></path></svg>`; }), 'capital_abcd']
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EMOS = [
    { name: 'Emoji', icon: [(/**
             * @param {?} fill
             * @param {?} width
             * @param {?} height
             * @return {?}
             */
            (fill, width, height) => { return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${width}" height="${height}" fill="${fill}"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path></svg>`; }), 'Emoji'] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxEmojComponent {
    constructor() {
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
    ngOnInit() {
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
        this.activeCategory = this.theme.martDefaultActiveCategory || DEFAULTS.martDefaultActiveCategory;
        if (this.theme.martDefaultActiveCategory === 'Recent' && this.emojiDB.length < 5) {
            this.activeCategory = DEFAULTS.martDefaultActiveCategory;
        }
        // get the emoji categories
        this.emojiCategories = EMOJIS.map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return { name: value.name, icon: value.icon };
        }));
        // filter to set defaults
        this.activeEmojiSet = EMOJIS.filter((/**
         * @param {?} category
         * @return {?}
         */
        (category) => {
            if (category.name === this.activeCategory) {
                return category;
            }
        }));
        this.updateEmojiSet();
        this.activeEmo = 'Emoji';
        // collate the emos type
        this.emos = EMOS.map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return { name: value.name, icon: value.icon };
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleCategoryChange(e) {
        // set active category name...
        this.activeCategory = e.name;
        this.updateEmojiSet();
    }
    /**
     * @return {?}
     */
    updateEmojiSet() {
        if (this.activeCategory === 'Recent') {
            // If recent category, set emoji to emojis in the recent store...
            this.activeIndex = EMOJIS[1].id;
            this.activeEmojiSet = this.emojiDB;
        }
        else if (this.activeCategory === 'Search') {
            this.activeIndex = EMOJIS[0].id;
            this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
        }
        else {
            // filter to set current emoji set...
            this.activeEmojiSet = EMOJIS.filter((/**
             * @param {?} category
             * @return {?}
             */
            (category) => {
                if (category.name === this.activeCategory) {
                    return category;
                }
            }));
            // update the index on manual change...
            this.activeIndex = this.activeEmojiSet[0].id;
            this.activeEmojiSet = this.activeEmojiSet[0].emojis;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleEmoChange(e) {
        this.activeEmo = e.name;
        // collate the emos type
        //   this.emos = EMOS.map((value) => {
        //    return {name: value.name, icon: value.icon};
        //  });
    }
    /**
     * @param {?} name
     * @return {?}
     */
    checkIfEmojiExistsInEmojiDB(name) {
        /** @type {?} */
        let emo_exists = false;
        // checks if emoji is already in recent emoji db store...
        for (let i = 0; i < this.emojiDB.length; i++) {
            if (this.emojiDB[i][1] === name) {
                emo_exists = true;
                break;
            }
        }
        return emo_exists;
    }
    /**
     * @param {?} emoji
     * @return {?}
     */
    addEmojiToRecentEmojiDB(emoji) {
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleEmojiPick(e) {
        // save the picked emoji inside recent emoji DB
        this.addEmojiToRecentEmojiDB(e.emoji);
        this.onemojipick.emit({ char: e.emoji[0], name: e.emoji[1] });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleCharDelete(e) {
        this.onchardelete.emit({ deleteChar: true });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleContentScroll(e) {
        // console.log('emitted', e.scrollTop, e.scrollHeight);
        if ((e.scrollHeight - e.scrollTop) <= 400) {
            // console.log('almost at the end');
            this.hideFooter = true;
        }
        else {
            // console.log('tooping the scroll');
            this.hideFooter = false;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleContentSwipe(e) {
        /** @type {?} */
        const currentIndex = this.activeIndex;
        /** @type {?} */
        const direction = e.direction;
        // Log the necessary details...
        if (direction === 'left') {
            /** @type {?} */
            const prev = currentIndex - 1;
            if (prev >= 0) {
                if (prev === 0) {
                    // search
                    this.activeIndex = EMOJIS[0].id;
                    this.activeCategory = EMOJIS[0].name;
                    this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
                }
                else if (prev === 1) {
                    // recent
                    this.activeIndex = EMOJIS[1].id;
                    this.activeCategory = EMOJIS[1].name;
                    this.activeEmojiSet = this.emojiDB;
                }
                else {
                    /** @type {?} */
                    const prevCategoryData = EMOJIS.filter((/**
                     * @param {?} category
                     * @return {?}
                     */
                    (category) => {
                        if (category.id === prev) {
                            return category;
                        }
                    }));
                    // set the values...
                    this.activeIndex = prev;
                    this.activeCategory = prevCategoryData[0].name;
                    this.activeEmojiSet = prevCategoryData[0].emojis;
                }
            }
        }
        else if (direction === 'right') {
            /** @type {?} */
            const next = currentIndex + 1;
            if (next === 0) {
                // search
                this.activeIndex = EMOJIS[0].id;
                this.activeCategory = EMOJIS[0].name;
                this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
            }
            else if (next === 1) {
                // recent
                this.activeIndex = EMOJIS[1].id;
                this.activeEmojiSet = this.emojiDB;
                this.activeCategory = EMOJIS[1].name;
            }
            else {
                if (next <= (EMOJIS.length - 1)) {
                    /** @type {?} */
                    const prevCategoryData = EMOJIS.filter((/**
                     * @param {?} category
                     * @return {?}
                     */
                    (category) => {
                        if (category.id === next) {
                            return category;
                        }
                    }));
                    // set the values...
                    this.activeIndex = next;
                    this.activeCategory = prevCategoryData[0].name;
                    this.activeEmojiSet = prevCategoryData[0].emojis;
                }
            }
        }
    }
}
NgxEmojComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj',
                template: `
    <div class="ngx-emoji-mart"
      [ngStyle]="
      {'background-color': (theme.martBG || DEFAULTS.martBG),
       'width': (width || DEFAULTS.martWidth),
       'height': (height || DEFAULTS.martHeight),
       'font-family': (theme.martFontFamily || DEFAULTS.martFontFamily),
       'border-radius': (theme.martBorderRadius || DEFAULTS.martBorderRadius)}">
      <ngx-emoj-header
        *ngIf="theme.martShowHeader"
        [headerBG]="(theme.martHeaderBG || DEFAULTS.martHeaderBG)"
        [headerFG]="(theme.martHeaderFG || DEFAULTS.martHeaderFG)"
        [headerFontSize]="(theme.martHeaderFontSize || DEFAULTS.martHeaderFontSize)"
        [headerPadding]="(theme.martHeaderPadding || DEFAULTS.martHeaderPadding)"
        [defaultActiveCategory]="(theme.martDefaultActiveCategory || DEFAULTS.martDefaultActiveCategory)"
        [activeCategory]="activeCategory"
        (oncategorychange)="handleCategoryChange($event)"
        [martCategoryFontSize]="(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)"
        [martCategoryColor]="(theme.martCategoryColor || DEFAULTS.martCategoryColor)"
        [martCategoryColorActive]="(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)"
        [activeIndicatorColor]="(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)"
        [activeIndicatorHeight]="(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)"
        [emojiCategories]="emojiCategories">
      </ngx-emoj-header>

      <ngx-emoj-category-content
      [categoryName]="activeCategory"
      [categoryEmojiSet]="activeEmojiSet"
      [activeIndex]="activeIndex"
      [martEmojiNotFoundFG]="(theme.martEmojiNotFoundFG || DEFAULTS.martEmojiNotFoundFG)"
      [emojiNotFoundText]="(emojiNotFoundText || DEFAULTS.emojiNotFoundText)"
      [searchBoxStyle]="(theme.martSearchBoxStyle || DEFAULTS.martSearchBoxStyle)"
      [searchEmojiPlaceholderText]="(searchEmojiPlaceholderText || DEFAULTS.searchEmojiPlaceholderText)"
      [emojiBtnPadding]="(theme.martEmojiPadding || DEFAULTS.martEmojiPadding)"
      [emojiFontSize]="(theme.martEmojiFontSize || DEFAULTS.martEmojiFontSize)"
      [martEmojiContentPaddingLeft]="(theme.martEmojiContentPaddingLeft || DEFAULTS.martEmojiContentPaddingLeft)"
      (onpickemoji)="handleEmojiPick($event)"
      (oncontentSwipe)="handleContentSwipe($event)"
      (oncontentscroll)="handleContentScroll($event)">
      </ngx-emoj-category-content>
      <ngx-emoj-footer
      *ngIf="theme.martShowFooter"
      [footerBG]="(theme.martFooterBG || DEFAULTS.martFooterBG)"
      [footerFG]="(theme.martFooterFG || DEFAULTS.martFooterFG)"
      [footerFontSize]="(theme.martFooterFontSize || DEFAULTS.martFooterFontSize)"
      [footerPadding]="(theme.martFooterPadding || DEFAULTS.martFooterPadding)"
      [defaultActiveEmo]="'Emoji'"
      (onchardelete)="handleCharDelete($event)"
      (onemochange)="handleEmoChange($event)"
      [martCategoryFontSize]="(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)"
      [martCategoryColor]="(theme.martCategoryColor || DEFAULTS.martCategoryColor)"
      [martCategoryColorActive]="(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)"
      [activeIndicatorColor]="(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)"
      [activeIndicatorHeight]="(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)"
      [emos]="emos"
      [hideFooter]="hideFooter">
    </ngx-emoj-footer>

    </div>
  `,
                styles: [`

    .ngx-emoji-mart
    {
      position: relative;
      margin: 0;
      margin-bottom: 10px;
      padding: 0px;
      box-sizing: border-box;
      overflow: hidden;
    }
  `]
            }] }
];
/** @nocollapse */
NgxEmojComponent.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxEmojHeaderComponent {
    constructor() {
        this.oncategorychange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.activeCategory) {
            this.activeCategory = this.defaultActiveCategory;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onCategorySelect(e) {
        this.activeCategory = e.name;
        this.oncategorychange.emit({ name: e.name });
    }
}
NgxEmojHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-header',
                template: `
    <div
      class="ngx-emoj-header"
      [ngStyle]="{'background-color': headerBG,
                  'color': headerFG,
                  'font-size': headerFontSize,
                  'padding': headerPadding.y+' '+headerPadding.x}">

                  <ngx-emoj-category *ngFor="let c of emojiCategories"
                   [categoryIcon]="c.icon[0]"
                   [categoryIconColor]="'white'"
                   [categoryName]="c.name"
                   [martCategoryFontSize]="martCategoryFontSize"
                   [martCategoryColor]="martCategoryColor"
                   [martCategoryColorActive]="martCategoryColorActive"
                   [activeIndicatorColor]="activeIndicatorColor"
                   [activeIndicatorHeight]="activeIndicatorHeight"
                   [active]="activeCategory === c.name"
                   (onselect)="onCategorySelect($event)"
                   [ngStyle]="{'width': '26.22px'}">
                  </ngx-emoj-category>
    </div>
  `,
                styles: [`

  .ngx-emoj-header
  {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }
  `]
            }] }
];
/** @nocollapse */
NgxEmojHeaderComponent.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxEmojFooterComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.onemochange = new EventEmitter();
        this.onchardelete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activeEmo = this.defaultActiveEmo;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onEmoSelect(e) {
        this.activeEmo = e.name;
        this.onemochange.emit({ name: e.name });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    deleteChar(e) {
        this.onchardelete.emit({ deleteChar: true });
    }
    /**
     * @param {?} fill
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    delButton(fill, width, height) {
        return `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.374 511.374" width="${width}" height="${height}" fill="${fill}" style="enable-background:new 0 0 511.374 511.374" xml:space="preserve"><g><g><path d="M433.134,47.687h-213.28c-37.109,0.21-72.235,16.778-96,45.28l-1.44,1.6l-115.2,140.8c-9.619,11.779-9.619,28.701,0,40.48l115.36,141.92c23.6,28.794,58.771,45.618,96,45.92h216.16c41.414-2.536,74.363-35.691,76.64-77.12c0-0.96,0-1.92,0-2.88v-257.12C510.781,83.499,476.196,48.631,433.134,47.687z M447.374,382.567c-0.428,9.583-8.327,17.13-17.92,17.12h-208c-19.662,0.779-38.49-7.979-50.56-23.52l-98.24-120.48l97.92-119.68c11.851-15.727,30.553-24.78,50.24-24.32h209.6c11.04,0,16,6.4,16.96,16V382.567z"/></g></g><g><g><path d="M373.934,296.967l-11.52-11.52c-12.504-12.504-32.776-12.504-45.28,0s-12.504,32.776,0,45.28l11.52,11.52c12.504,12.504,32.776,12.504,45.28,0S386.438,309.471,373.934,296.967z"/></g></g><g><g><path d="M373.934,169.127c-12.504-12.504-32.776-12.504-45.28,0h0.16l-41.44,41.28l-41.44-41.44c-12.504-12.504-32.776-12.504-45.28,0s-12.504,32.776,0,45.28l41.44,41.44l-41.44,41.44c-12.504,12.504-12.504,32.776,0,45.28s32.776,12.504,45.28,0l128-128C386.438,201.903,386.438,181.631,373.934,169.127z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
    }
}
NgxEmojFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-footer',
                template: `
    <div
      class="ngx-emoj-footer"
      [class.unveal]="hideFooter"
      [class.reveal]="!hideFooter"
      [ngStyle]="{'background-color': footerBG,
                  'color': footerFG,
                  'font-size': footerFontSize,
                  'padding': footerPadding.y+' '+footerPadding.x}">

                  <div class="l">
                        <button
                        class="emos-btn"
                *ngFor="let e of emos" [innerHTML]="sanitizer.bypassSecurityTrustHtml(
                          e.icon[0](((e.name == activeEmo ) ? martCategoryColorActive : martCategoryColor),
                                       martCategoryFontSize, martCategoryFontSize))">
                        </button>
                  </div>
                  <div class="r">
                      <button class="emos-btn"
                          (click)="deleteChar($event)"
                          [ngStyle]="{'color': martCategoryColor}"
                          [innerHTML]="sanitizer.bypassSecurityTrustHtml(
                            delButton(martCategoryColor, martCategoryFontSize, martCategoryFontSize))">
                      </button>
                  </div>
    </div>
  `,
                styles: [`
   .ngx-emoj-footer
  {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;

  }
  .ngx-emoj-footer .l
  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
  }
  .ngx-emoj-footer .r
  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
  }

  .emos-btn
  {
    background: transparent;
    padding: 15px 10% 10px 10%;
    border: none;
    outline: none;
    padding-left: 10%;
    padding-right: 10%;
    border: none;
  }


  .reveal
  {
    animation-name: reveal;
    animation-duration: .3s;
    animation-fill-mode: forwards;
  }


  .unveal
  {
    animation-name: unveal;
    animation-duration: .5s;
    animation-fill-mode: forwards;
  }

  @keyframes unveal
  {
    from
    {
      opacity: 1;
      bottom: 0;
    }

    to
    {
      opacity: 0;
      bottom: -150px;
    }
  }

  @keyframes reveal
  {

    from
    {
      opacity: 0;
      bottom: -150px;
    }

    to
    {
      opacity: 1;
      bottom: 0;
    }
  }

  `]
            }] }
];
/** @nocollapse */
NgxEmojFooterComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxEmojCategoryComponent {
    /**
     * @param {?} sanitizer
     * @param {?} cdRef
     */
    constructor(sanitizer, cdRef) {
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.onselect = new EventEmitter;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setInnerHtml();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.active.previousValue !== changes.active.currentValue) {
            this.setInnerHtml();
            this.cdRef.markForCheck();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectCategory($event) {
        $event.stopPropagation();
        this.onselect.emit({ name: this.categoryName, icon: this.categoryIcon });
    }
    /**
     * @private
     * @return {?}
     */
    setInnerHtml() {
        this.safeSvgComponent = this.sanitizer.bypassSecurityTrustHtml(this.categoryIcon(((this.active) ? this.martCategoryColorActive : this.martCategoryColor), this.martCategoryFontSize, this.martCategoryFontSize));
    }
}
NgxEmojCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-category',
                template: `
    <button (click)="selectCategory($event)" class="ngx-emoji-category-btn"
    [ngStyle]="{'color': categoryIconColor,
                'border-width': activeIndicatorHeight,
                'border-color': (active) ? activeIndicatorColor : 'transparent'}"
                [innerHTML]=safeSvgComponent>
    </button>
  `,
                styles: [`
  .ngx-emoji-category-btn
  {
    background: transparent;
    padding: 15px 10% 10px 10%;
    border: none;
    outline: none;
    border-bottom: 2px solid transparent;
  }
  `]
            }] }
];
/** @nocollapse */
NgxEmojCategoryComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ChangeDetectorRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxEmojCategoryContentComponent {
    /**
     * @param {?} rd
     */
    constructor(rd) {
        this.rd = rd;
        this.onpickemoji = new EventEmitter;
        this.oncontentscroll = new EventEmitter;
        this.oncontentSwipe = new EventEmitter;
        this.searchSet = [];
        this.recentEmosForSearch = [];
        this.initialEmoj = false;
        this.notFound = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.activeIndex === 0) {
            this.focusSearch();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    search(e) {
        if (!this.initialEmoj) {
            // save the recent emojs
            this.recentEmosForSearch = this.categoryEmojiSet;
            /** @type {?} */
            let searchSet = [];
            for (let i = 2; i < EMOJIS.length; i++) {
                searchSet = searchSet.concat(EMOJIS[i].emojis);
            }
            this.searchSet = searchSet;
            this.initialEmoj = true;
        }
        /** @type {?} */
        const query = e.target.value.toLowerCase();
        if (query && query.trim() !== '') {
            this.categoryEmojiSet = this.searchSet.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
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
    }
    /**
     * @param {?} emoji
     * @return {?}
     */
    pickEmoji(emoji) {
        this.onpickemoji.emit({
            emoji: emoji
        });
    }
    /**
     * @private
     * @return {?}
     */
    focusSearch() {
        /** @type {?} */
        const element = this.rd.selectRootElement('.ngx-emoji-search');
        this.searchInput.nativeElement.value = '';
        this.initialEmoj = false;
        this.notFound = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            element.focus();
        }), 0);
    }
}
NgxEmojCategoryContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-category-content',
                template: `
    <input [hidden]="activeIndex !== 0"  type="text" (keyup)="search($event)" placeholder="{{ searchEmojiPlaceholderText }}"
        class="ngx-emoji-search" [ngStyle]="{'color': searchBoxStyle.FGcolor,
        'background': searchBoxStyle.BGcolor,
        'border-radius': searchBoxStyle.borderRadius,
        'border-color': searchBoxStyle.borderColor}"
        #searchInput/>
    <div class="ngx-emoji-not-found" *ngIf="activeIndex === 0 && notFound == true"
    [ngStyle]="{
    'color': martEmojiNotFoundFG
    }">
    {{ emojiNotFoundText }}
    </div>
  <div class="ngx-emoji-category-content"
       *ngIf="!notFound"
       [ngStyle]="{'padding': '0px 5px 5px ' + martEmojiContentPaddingLeft, 'height': activeIndex === 0? '70%':'85%'}"
       #emojiContainer>

      <div class="emoji-btn-container"
        *ngFor="let emo of categoryEmojiSet" [ngStyle]="{'height': emojiBtnPadding.y,
                                                         'width': emojiBtnPadding.x   }">
          <button (click)="pickEmoji(emo)" class="ngx-emoji-emoj-btn"
          [ngStyle]="{'font-size': emojiFontSize}">
      {{ emo[0] }}
    </button>
      </div>
  </div>
  `,
                styles: [`
  .ngx-emoji-not-found
  {
    display: table;
    margin: 60px auto;
    font-size: 15px;
    font-family: sans-serif;
  }

  .ngx-emoji-search
  {
    width: 87%;
    display: table;
    border: 1px solid;
    padding: 5px 10px;
    height: 30px;
    font-family: sans-serif;
    margin: 15px auto 10px auto;
    outline: none;
  }

  .ngx-emoji-category-content
  {
    overflow-y: scroll;
    width: 100% !important;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    align-content: flex-start;
    justify-content: flex-start;
  }

  .emoji-btn-container
  {
    display: flex;
    overflow: hidden;
  }
  .ngx-emoji-emoj-btn
  {
    background: transparent;
    margin: auto;
    border: none;
    outline: none;
    cursor: pointer;
  }
  `]
            }] }
];
/** @nocollapse */
NgxEmojCategoryContentComponent.ctorParameters = () => [
    { type: Renderer2 }
];
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
    emojiContainer: [{ type: ViewChild, args: ['emojiContainer',] }],
    searchInput: [{ type: ViewChild, args: ['searchInput',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxEmojModule {
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