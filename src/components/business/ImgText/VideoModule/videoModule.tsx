import { ORow, OCol, OInput, OForm, OButton, OTabs } from '@ocloud/ui'
import { ImgTextProps } from '@/components/ImgText'
import ImgUpload from '@/components/ImgUpload'
import { TinyControlled } from '@/components/TinyComp'
import AllPositionSetting from '@/components/PositionSetting'
import ModuleTitle from '../ModuleTitle'
import useOperationButton from '../hooks/useOperationButton'
import { POSITION_INITVALUE } from '@/utils/constants'
import styles from '../styles.module.less'
import ModuleBaseForm from '@/components/ImgText/ModuleBaseForm/moduleBaseForm'

function VideoModule({
  name,
  sort,
  size,
  onOperate,
  deviceType,
  applyType,
}: ImgTextProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name!]
  }

  const operationButton = useOperationButton(sort, size, onOperate)

  return (
    <ORow gutter={20} className={styles.moduleBorder}>
      <OCol span={12}>
        <OForm.Item>
          <ModuleTitle title="视频样式一(全屏)" />
          {operationButton}
        </OForm.Item>
        <ModuleBaseForm
          nameArr={nameArr}
          deviceType={deviceType}
          applyType={applyType}
        />
        <OForm.Item>
          <ORow gutter={15}>
            <OCol span={8}>
              <OForm.Item name={[...nameArr, 'imgUrl']} noStyle>
                <ImgUpload />
              </OForm.Item>
              <p>封面:第一个视频未加载完成时显示</p>
              <p>建议尺寸 1920*920 px</p>
            </OCol>
            <OCol span={8}>
              <OForm.Item name={[...nameArr, 'autoplayVideo']} noStyle>
                <ImgUpload
                  accept="video/mp4,video/mkv,video/ogv"
                  maxSize={50 * 1024}
                  isVideo
                />
              </OForm.Item>
              <p>该视频加载后自动循环播放</p>
              <p>建议尺寸 1920*920 px</p>
            </OCol>
            <OCol span={8}>
              <OForm.Item name={[...nameArr, 'clickVideo']} noStyle>
                <ImgUpload
                  accept="video/mp4,video/mkv,video/ogv"
                  maxSize={200 * 1024}
                  isVideo
                />
              </OForm.Item>
              <p>该视频点击播放</p>
            </OCol>
            <OCol span={24}>
              <p>
                视频支持的文件类型包括：mp4，mkv，ogv，第一个视频建议使用10秒以内，大小5M以内的视频。
              </p>
            </OCol>
          </ORow>
        </OForm.Item>
        <OForm.Item label="播放按钮文案" name={[...nameArr, 'altLabel']}>
          <OInput showCount maxLength={100} />
        </OForm.Item>
      </OCol>
      <OCol span={12}>
        <OForm.List name={[...nameArr, 'descriptionList']}>
          {(fields, { add, remove }) => {
            return (
              <>
                <OButton type="primary" onClick={() => add(POSITION_INITVALUE)}>
                  添加文本
                </OButton>
                <OTabs>
                  {fields.map(({ name, key }, index) => {
                    return (
                      <OTabs.TabPane tab={`文本${index + 1}`} key={key}>
                        <OButton
                          type="primary"
                          danger
                          onClick={() => remove(name)}
                        >
                          删除
                        </OButton>
                        <AllPositionSetting parentFieldName={name} />
                        <OForm.Item
                          name={[name, 'description']}
                          className="mb0"
                        >
                          <TinyControlled />
                        </OForm.Item>
                      </OTabs.TabPane>
                    )
                  })}
                </OTabs>
              </>
            )
          }}
        </OForm.List>
      </OCol>
    </ORow>
  )
}

export default VideoModule
