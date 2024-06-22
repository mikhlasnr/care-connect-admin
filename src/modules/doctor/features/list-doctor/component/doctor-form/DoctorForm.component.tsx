import { poliList } from '@/utils/data'
import {
  Button,
  Flex,
  Form,
  FormProps,
  Input,
  Modal,
  Radio,
  Select,
} from 'antd'
import { FieldNamesType } from 'antd/es/cascader'
import React from 'react'
const { Option } = Select

type FieldType = {
  name?: string
  password?: string
  phoneNumber?: string
  nip?: string
  jenisKelamin?: 'pria' | 'wanita'
  poli?: string
  email?: string
}

interface DoctorFormProps {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const DoctorForm = ({
  isModalOpen,
  setIsModalOpen,
}: DoctorFormProps) => {
  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const onFinish: FormProps<FieldNamesType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldNamesType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Modal
      title="Tambah Dokter"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="basic"
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
          label="Nomor HP"
          name="phoneNumber"
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
          name="jenisKelamin"
          rules={[{ required: true, message: 'Jenis Kelamin Wajib Diisi!' }]}
        >
          <Radio.Group>
            <Radio value="pria"> Pria </Radio>
            <Radio value="wanita"> Wanita </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item<FieldType>
          name="poli"
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
          <Button>Batal</Button>
          <Button type="primary" htmlType="submit">
            Tambah Dokter
          </Button>
        </Flex>
      </Form>
    </Modal>
  )
}
