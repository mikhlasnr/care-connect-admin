import {
  addDoctorList,
  toggleShowDoctorForm,
} from '@/store/docter/docter.reducer'
import { DoctorCreate } from '@/store/docter/docter.types'
import { useAppDispatch, useAppSelector } from '@/store/store'
import {
  Button,
  DatePicker,
  Flex,
  Form,
  FormProps,
  Input,
  Modal,
  Radio,
  Select,
} from 'antd'
import dayjs from 'dayjs'
const { Option } = Select

type FieldType = {
  name?: string
  password?: string
  phone?: string
  nip?: string
  gender?: 'pria' | 'wanita'
  poliId?: string
  email?: string
  date?: Date
}

interface DoctorFormProps {}
export const DoctorForm = () => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const poliList = useAppSelector((state) => state.poli.poliList)
  const isDoctorFormShow = useAppSelector(
    (state) => state.docter.isDoctorFormShow,
  )

  // START HANDLE MODAL
  const handleOk = () => {
    dispatch(toggleShowDoctorForm())
    form.resetFields()
  }

  const handleCancel = () => {
    dispatch(toggleShowDoctorForm())
    form.resetFields()
  }
  // END HANDLE MODAL

  // START HANDLE SUBMIT
  const onFinish: FormProps<DoctorCreate>['onFinish'] = (values) => {
    const findSelectedPoli = poliList.find(
      (poliItem) => poliItem.id === values.poliId,
    )
    if (findSelectedPoli) {
      const formattedValues: DoctorCreate = {
        ...values,
        poliName: findSelectedPoli.name,
        date: dayjs(values.date).format('dd-mm-yyyy'), // Format date to string if needed
      }
      dispatch(addDoctorList(formattedValues))
      dispatch(toggleShowDoctorForm())
    }
  }

  const onFinishFailed: FormProps<DoctorCreate>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo)
  }
  // END HANDLE SUBMIT

  return (
    <Modal
      title="Tambah Dokter"
      open={isDoctorFormShow}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        name="doctor-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Nama Lengkap"
          name="name"
          rules={[{ required: true, message: 'Nama Lengkap Wajib Diisi!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Tanggal Lahir"
          name="date"
          rules={[{ required: true, message: 'Tanggal Lahir Wajib Diisi!' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item<FieldType>
          label="Nomor HP"
          name="phone"
          rules={[{ required: true, message: 'Nomor HP Wajib Diisi!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="NIP"
          name="nip"
          rules={[{ required: true, message: 'NIP Wajib Diisi!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Jenis Kelamin"
          name="gender"
          rules={[{ required: true, message: 'Jenis Kelamin Wajib Diisi!' }]}
        >
          <Radio.Group>
            <Radio value="pria"> Pria </Radio>
            <Radio value="wanita"> Wanita </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item<FieldType>
          name="poliId"
          label="Poli"
          rules={[{ required: true, message: 'Poli Wajib Dipilih!' }]}
        >
          <Select placeholder="Pilih Poli">
            {poliList.map((poli) => (
              <Option key={poli.id} value={poli.id}>
                {poli.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Email Wajib Diisi!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Flex gap={12} justify="flex-end">
          <Button onClick={handleCancel}>Batal</Button>
          <Button type="primary" htmlType="submit">
            Tambah Dokter
          </Button>
        </Flex>
      </Form>
    </Modal>
  )
}
