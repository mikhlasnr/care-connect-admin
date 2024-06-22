'use client'

import { DoctorItem } from '@/store/docter/docter.types'
import { useAppSelector } from '@/store/store'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import type { PopconfirmProps, TableProps } from 'antd'
import { Button, Popconfirm, Space, Table, Tooltip, message } from 'antd'
import Link from 'next/link'

export const ListDoctorTable = () => {
  const doctorList = useAppSelector((state) => state.docter.doctorList)

  // START HANDLE DELETE
  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e)
    message.success('Data Berhasil Dihapus')
  }

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e)
  }
  // END HANDLE DELETE

  const columns: TableProps<DoctorItem>['columns'] = [
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Umur',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Poli',
      dataIndex: 'poliName',
      key: 'poliName',
    },
    {
      width: 80,
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Ubah">
            <Button icon={<EditOutlined />} />
          </Tooltip>
          <Tooltip title="Hapus">
            <Popconfirm
              title="Hapus akun dokter"
              description="Apakah Anda yakin ingin menghapus akun dokter ini?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Hapus"
              cancelText="Batal"
            >
              <Button danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ]

  return <Table columns={columns} dataSource={doctorList} />
}
