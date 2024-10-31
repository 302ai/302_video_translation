'use server'
import { produce } from 'immer'
import ky from 'ky'

interface Response {
  code: number
  data: Data
  params: Params
  router: string
}

interface Data {
  code: number
  data: InnerData
  message: null
  recordTime: string
}

interface InnerData {
  data: NoteItem[]
}

interface NoteItem {
  comment_list: any[]
  model_type: string
  note_list: Note[]
  track_id: string
  user: User
}

interface Note {
  api_upgrade: number
  ats: any[]
  collected: boolean
  collected_count: number
  comments_count: number
  cooperate_binds: any[]
  countdown: number
  desc: string
  enable_brand_lottery: boolean
  enable_co_produce: boolean
  enable_fls_bridge_cards: boolean
  enable_fls_related_cards: boolean
  foot_tags: any[]
  goods_info: Record<string, unknown>
  has_co_produce: boolean
  has_music: boolean
  has_related_goods: boolean
  hash_tag: HashTag[]
  head_tags: any[]
  id: string
  images_list: Image[]
  in_censor: boolean
  ip_location: string
  last_update_time: number
  liked: boolean
  liked_count: number
  liked_users: any[]
  long_press_share_info: LongPressShareInfo
  may_have_red_packet: boolean
  media_save_config: MediaSaveConfig
  mini_program_info: MiniProgramInfo
  model_type: string
  native_voice_info: NativeVoiceInfo
  need_next_step: boolean
  need_product_review: boolean
  note_text_press_options: NoteTextPressOption[]
  privacy: Privacy
  qq_mini_program_info: QQMiniProgramInfo
  red_envelope_note: boolean
  seeded: boolean
  seeded_count: number
  share_code_flag: number
  share_info: ShareInfo
  shared_count: number
  sticky: boolean
  time: number
  title: string
  topics: Topic[]
  type: string
  use_water_color: boolean
  user: User
  video: Video
  view_count: number
  widgets_context: string
  widgets_groups: string[][]
}

interface HashTag {
  bizId: string
  current_score: number
  id: string
  link: string
  name: string
  record_count: number
  record_emoji: string
  record_unit: string
  tag_hint: string
  type: string
}

interface Image {
  fileid: string
  height: number
  index: number
  latitude: number
  longitude: number
  need_load_original_image: boolean
  original: string
  scale_to_large: number
  trace_id: string
  url: string
  url_multi_level: {
    high: string
    low: string
    medium: string
  }
  url_size_large: string
  width: number
}

interface LongPressShareInfo {
  block_private_msg: boolean
  content: string
  function_entries: { type: string }[]
  guide_audited: boolean
  is_star: boolean
  show_wechat_tag: boolean
  title: string
}

interface MediaSaveConfig {
  disable_save: boolean
  disable_watermark: boolean
  disable_weibo_cover: boolean
}

interface MiniProgramInfo {
  desc: string
  path: string
  share_title: string
  thumb: string
  title: string
  user_name: string
  webpage_url: string
}

interface NativeVoiceInfo {
  cover: string
  desc: string
  duration: number
  md5sum: string
  name: string
  optimize_exp_in_use_count: number
  sound_bg_music_type: number
  sound_id: string
  subtitle: string
  url: string
  use_count: number
}

interface NoteTextPressOption {
  extra: string
  key: string
}

interface Privacy {
  nick_names: string
  show_tips: boolean
  type: number
}

interface QQMiniProgramInfo {
  desc: string
  path: string
  share_title: string
  thumb: string
  title: string
  user_name: string
  webpage_url: string
}

interface ShareInfo {
  block_private_msg: boolean
  content: string
  function_entries: { type: string }[]
  guide_audited: boolean
  image: string
  is_star: boolean
  link: string
  show_wechat_tag: boolean
  title: string
}

interface Topic {
  activity_online: boolean
  business_type: number
  discuss_num: number
  id: string
  image: string
  link: string
  name: string
  style: number
}

interface User {
  followed: boolean
  fstatus: string
  id: string
  image: string
  level: { image: string }
  name: string
  nickname: string
  red_id: string
  red_official_verified: boolean
  red_official_verify_type: number
  show_red_official_verify_icon: boolean
  track_duration: number
  userid: string
}

interface Video {
  adaptive_streaming_url_set: any[]
  avg_bitrate: number
  can_super_resolution: boolean
  duration: number
  first_frame: string
  frame_ts: number
  height: number
  id: string
  is_upload: boolean
  is_user_select: boolean
  played_count: number
  preload_size: number
  thumbnail: string
  thumbnail_dim: string
  url: string
  url_info_list: UrlInfo[]
  vmaf: number
  volume: number
  width: number
}

interface UrlInfo {
  avg_bitrate: number
  desc: string
  height: number
  url: string
  vmaf: number
  width: number
}

interface Params {
  note_id: string
}

export const getRealUrlForXiaohongshu = async (id: string, apiKey: string) => {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const response = await ky
      .get(`${API_URL}/tools/xiaohongshu/web/get_note_info`, {
        searchParams: {
          note_id: id,
        },
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        timeout: 10000,
      })
      .json<Response>()

    if (response.data.data.data.at(0)?.note_list.at(0)?.video.url) {
      const proxyUrl = `/api/video-proxy?url=${encodeURIComponent(response.data.data.data.at(0)?.note_list.at(0)?.video.url || '')}`
      const newResponse = produce(response, (draft) => {
        const video = draft.data.data.data.at(0)?.note_list.at(0)?.video
        if (video) {
          video.url = proxyUrl
        }
      })

      return newResponse
    }

    return response
  } catch (error) {
    console.error(error)
    throw new Error("Failed to get real URL for Xiaohongshu");
  }
}
