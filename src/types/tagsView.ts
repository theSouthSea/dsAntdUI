export type TagItem = {
  // code: string;
  key: string

  // label: {
  //   zh_CN: string;
  //   en_US: string;
  // };
  label: string

  /** tag's route path */
  path: string

  /** can be closed ? */
  closable: boolean
}

export interface TagState {
  /** tagsView list */
  tags: TagItem[]

  /**current tagView id */
  activeTagId: TagItem["path"]
}
