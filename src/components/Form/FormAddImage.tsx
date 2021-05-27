import { Box, Button, Stack, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '../../services/api';
import { FileInput } from '../Input/FileInput';
import { TextInput } from '../Input/TextInput';
import axios from 'axios';

interface FormAddImageProps {
  closeModal: () => void;
}

interface FormAddImageData {
  image:string;
  title:string,
  description:string,


}

export function FormAddImage({ closeModal }: FormAddImageProps): JSX.Element {
  const formats = ['png','jpeg','gif']
  const [imageUrl, setImageUrl] = useState('');
  const [localImageUrl, setLocalImageUrl] = useState('');
  const toast = useToast();

  const formValidations = {
    image: {
      required:true ,
      validate: {
        lessThan10MB: file => file[0].size<10,
        acceptedFormats: file => formats.includes(file[0].type) 
      }
      // TODO REQUIRED, LESS THAN 10 MB AND ACCEPTED FORMATS VALIDATIONS
    },
    title: {
      required:'Título obrigatório',
      minLenght: {
       value: 2,
       message:'Mínimo de 2 caracteres'
      },
      maxLength : {
        value:20,
        message:'Maximo de 20 caracteres'
      },
    },
    
    description: {
      required:'Descrição obrigatória',
      maxLength: {
        value:65,
        message:'Máximo de 65 caracteres'
      }

      // TODO REQUIRED, MAX LENGTH VALIDATIONS
    },
  };


  const queryClient = useQueryClient();
  const mutation = useMutation( 
    (formData:FormAddImageData) => axios.post('/api/images',formData),  // TODO MUTATION API POST REQUEST,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('images')
      }
      // TODO ONSUCCESS MUTATION
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setError,
    trigger,
  } = useForm();
  const { errors } = formState;

  const onSubmit = async (data:FormAddImageData ): Promise<void> => {
    try {
      if (!imageUrl) {
        toast({
          title: 'Imagem não adicionada',
          description:
            'É preciso adicionar e aguardar o upload de uma imagem antes de realizar o cadastro.',
          status: 'info',
        });
        return;
      }
        await mutation.mutateAsync(data)
        toast({
          title: 'Imagem cadastrada',
          description: 'Sua imagem foi cadastrada com sucesso.',
          status: 'success',
        });
        return;
      

      // TODO SHOW ERROR TOAST IF IMAGE URL DOES NOT EXISTS
      // TODO EXECUTE ASYNC MUTATION
      // TODO SHOW SUCCESS TOAST
    } catch {
      toast({
        title: 'Falha no cadastro',
        description:
          'Ocorreu um erro ao tentar cadastrar a sua imagem',
        status: 'error',
      });
      // TODO SHOW ERROR TOAST IF SUBMIT FAILED
    } finally {
     setImageUrl('')
     setLocalImageUrl('')

      
      // TODO CLEAN FORM, STATES AND CLOSE MODAL
    }
  };

  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FileInput
          setImageUrl={setImageUrl}
          localImageUrl={localImageUrl}
          setLocalImageUrl={setLocalImageUrl}
          setError={setError}
          trigger={trigger}
          {...register ("Image", formValidations.image)}
          error={errors.image}
          
          // TODO SEND IMAGE ERRORS
          // TODO REGISTER IMAGE INPUT WITH VALIDATIONS
        />

        <TextInput
          placeholder="Título da imagem..."
          {...register('Título',formValidations.title)}
          // TODO SEND TITLE ERRORS
          // TODO REGISTER TITLE INPUT WITH VALIDATIONS
          error={errors.TITLE}
        />

        <TextInput
          placeholder="Descrição da imagem..."
          {...register('Descrição',formValidations.description)}
          error = {errors.description}
          // TODO SEND DESCRIPTION ERRORS
          // TODO REGISTER DESCRIPTION INPUT WITH VALIDATIONS
        />
      </Stack>

      <Button
        my={6}
        isLoading={formState.isSubmitting}
        isDisabled={formState.isSubmitting}
        type="submit"
        w="100%"
        py={6}
      >
        Enviar
      </Button>
    </Box>
  );
}
