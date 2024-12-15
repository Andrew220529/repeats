'use client';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
// import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { useRouter } from 'next/router';

export default function FormWrapper(props) {
  const user_list = props.userList
  const router = useRouter();

  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: {
      emailOrUsername: '',
      password: ''
    }
  });

  const onSubmit = (data) => {
    const { username, password } = data
    const user = user_list.find((user) => (username === user.username && password === user.password))

    if (user) {
      router.push(`/${username}`)
    }
  }

  return (
    <VStack
      alignItems={"center"}
      justifyContent={"center"}
      width={"fit-content"}
      marginInline={"auto"}
      minHeight={"100vh"}
    >
      <VStack
        as='form'
        width={"fit-content"}
        marginInline={"auto"}
        boxShadow="lg"
        borderRadius={"10"}
        alignItems={"flex-start"}
        p={"32px"}
        gap={"20px"}
        onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={"10px"} alignItems={"flex-start"}>
          <Text>ユーザ名</Text>
          <Input
            width={"250px"}
            {...register('username')}
            type="text"
          />
        </VStack>
        <VStack gap={"10px"} alignItems={"flex-start"}>
          <Text>パスワード</Text>
          <Input
            width={"250px"}
            {...register('password')}
            type="password"
          />
        </VStack>
        <Button marginInline={"auto"} type='submit'>ログイン</Button>
      </VStack>
    </VStack>
  )
}

export async function getStaticProps() {
  const pathname = "user_list";
  const FilePath = path.join(process.cwd(), `src/${pathname}.json`);
  const user_list = await fsPromises.readFile(FilePath);
  const user_objectList = JSON.parse(user_list);

  return {
    props: {
      userList: user_objectList
    }
  }
}