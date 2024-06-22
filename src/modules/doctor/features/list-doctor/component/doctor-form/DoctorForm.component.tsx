import {
  addDoctorList,
  removeSelectedDoctor,
  toggleShowDoctorForm,
  updateDoctorList,
} from '@/store/docter/docter.reducer'
import { DoctorCreate, DoctorItem } from '@/store/docter/docter.types'
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
import { useEffect } from 'react'
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

  const handleCancel = () => {
    dispatch(toggleShowDoctorForm())
    dispatch(removeSelectedDoctor())
    form.resetFields()
  }
  // END HANDLE MODAL

  // START HANDLE UPDATE DEFAULT VALUE
  const selectedDoctor = useAppSelector((state) => state.docter.selectedDoctor)

  useEffect(() => {
    if (selectedDoctor) {
      form.setFieldValue('name', selectedDoctor.name)
      form.setFieldValue('date', dayjs(selectedDoctor.date))
      form.setFieldValue('phone', selectedDoctor.phone)
      form.setFieldValue('nip', selectedDoctor.nip)
      form.setFieldValue('gender', selectedDoctor.gender)
      form.setFieldValue('poliId', selectedDoctor.poliId)
      form.setFieldValue('email', selectedDoctor.email)
    }
  }, [selectedDoctor])

  // END HANDLE UPDATE DEFAULT VALUE

  // START HANDLE SUBMIT
  const onFinish: FormProps<DoctorCreate>['onFinish'] = (values) => {
    const findSelectedPoli = poliList.find(
      (poliItem) => poliItem.id === values.poliId,
    )
    if (findSelectedPoli) {
      if (selectedDoctor) {
        const formattedValues: DoctorItem = {
          ...values,
          id: selectedDoctor.id,
          password: selectedDoctor.password,
          poliName: findSelectedPoli.name,
          date: dayjs(values.date).format('YYYY-MM-DD'), // Format date to string if needed
        }
        dispatch(updateDoctorList(formattedValues))
        handleCancel()
      } else {
        const formattedValues: DoctorCreate = {
          ...values,
          poliName: findSelectedPoli.name,
          date: dayjs(values.date).format('YYYY-MM-DD'), // Format date to string if needed
        }
        dispatch(addDoctorList(formattedValues))
        handleCancel()
      }
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
