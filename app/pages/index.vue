<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle class="text-2xl font-bold text-center">Giriş Yap</CardTitle>
        <CardDescription class="text-center">
          Hesabınıza giriş yapmak için bilgilerinizi girin
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="space-y-2">
            <Label for="email">E-posta</Label>
            <Input
              id="email"
              v-model="email"
              type="email"
              placeholder="ornek@email.com"
              required
            />
          </div>
          
          <div class="space-y-2">
            <Label for="password">Şifre</Label>
            <Input
              id="password"
              v-model="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" v-model="rememberMe" class="rounded" />
              <span>Beni hatırla</span>
            </label>
            <a href="#" class="text-blue-600 hover:underline">
              Şifremi unuttum
            </a>
          </div>

          <Button type="submit" class="w-full">
            Giriş Yap
          </Button>
        </form>

        <div class="mt-4 text-center text-sm">
          Hesabınız yok mu?
          <a href="#" class="text-blue-600 hover:underline font-medium">
            Kayıt ol
          </a>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = () => {
  console.log('Login:', {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
  
  alert(`Giriş yapılıyor: ${email.value}`)
}
</script>