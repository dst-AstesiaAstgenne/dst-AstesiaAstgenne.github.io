<template>
  <div class="login-container">
    <!-- 背景装饰 -->
    <div class="background-decoration"></div>
    <div class="background-decoration background-decoration-2"></div>
    
    <!-- 主卡片 -->
    <div class="login-card">
      <!-- 标题和选项卡 -->
      <div class="login-header">
        <div class="login-tabs">
          <button 
            class="tab-button" 
            :class="{ active: currentTab === 'login' }"
            @click="switchTab('login')"
          >
            登录
          </button>
          <button 
            class="tab-button" 
            :class="{ active: currentTab === 'register' }"
            @click="switchTab('register')"
          >
            注册
          </button>
          <button 
            class="tab-button" 
            :class="{ active: currentTab === 'forgot' || currentTab === 'reset' }"
            @click="switchTab('forgot')"
          >
            忘记密码
          </button>
        </div>
      </div>

      <!-- 登录表单 -->
      <form v-if="currentTab === 'login'" @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="login-email" class="form-label">邮箱</label>
          <input
            id="login-email"
            v-model="loginForm.email"
            type="email"
            class="form-input"
            placeholder="请输入邮箱"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="login-password" class="form-label">密码</label>
          <input
            id="login-password"
            v-model="loginForm.password"
            type="password"
            class="form-input"
            placeholder="请输入密码"
            required
          >
        </div>
        
        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="loginForm.rememberMe">
            <span>记住我</span>
          </label>
          <button type="button" class="forgot-link" @click="switchTab('forgot')">忘记密码？</button>
        </div>
        
        <button type="submit" class="submit-button" :disabled="isLoading">
          <span v-if="isLoading" class="loading-spinner"></span>
          {{ isLoading ? '登录中...' : '登录' }}
        </button>
        
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </form>

      <!-- 注册表单 -->
      <form v-else-if="currentTab === 'register'" @submit.prevent="handleRegister" class="login-form">
        <div class="form-group">
          <label for="register-email" class="form-label">邮箱</label>
          <input
            id="register-email"
            v-model="registerForm.email"
            type="email"
            class="form-input"
            placeholder="请输入邮箱地址"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="register-code" class="form-label">验证码</label>
          <div class="code-input-group">
            <input
              id="register-code"
              v-model="registerForm.code"
              type="text"
              class="form-input code-input"
              placeholder="请输入验证码"
              required
            >
            <button 
              type="button" 
              class="send-code-button"
              @click="sendRegisterCode"
              :disabled="isSendingCode || isLoading"
            >
              {{ isSendingCode ? '发送中...' : (countdown > 0 ? `${countdown}s后重发` : '获取验证码') }}
            </button>
          </div>
        </div>
        
        <div class="form-group">
          <label for="register-password" class="form-label">密码</label>
          <input
            id="register-password"
            v-model="registerForm.password"
            type="password"
            class="form-input"
            placeholder="请设置密码（至少8位）"
            required
            minlength="8"
          >
        </div>
        
        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="registerForm.agreeTerms" required>
            <span>我已阅读并同意<a href="#" class="terms-link">服务条款</a>和<a href="#" class="terms-link">隐私政策</a></span>
          </label>
        </div>
        
        <button type="submit" class="submit-button" :disabled="isLoading">
          <span v-if="isLoading" class="loading-spinner"></span>
          {{ isLoading ? '注册中...' : '注册' }}
        </button>
        
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      </form>

      <!-- 忘记密码表单 - 请求验证码 -->
      <form v-else-if="currentTab === 'forgot'" @submit.prevent="handleForgotRequest" class="login-form">
        <div class="form-group">
          <label for="forgot-email" class="form-label">邮箱</label>
          <input
            id="forgot-email"
            v-model="forgotForm.email"
            type="email"
            class="form-input"
            placeholder="请输入您注册时使用的邮箱"
            required
          >
        </div>
        
        <button type="submit" class="submit-button" :disabled="isLoading">
          <span v-if="isLoading" class="loading-spinner"></span>
          {{ isLoading ? '发送中...' : '发送重置验证码' }}
        </button>
        
        <button type="button" class="back-button" @click="switchTab('login')">
          返回登录
        </button>
        
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      </form>

      <!-- 忘记密码表单 - 重置密码 -->
      <form v-else-if="currentTab === 'reset'" @submit.prevent="handleResetPassword" class="login-form">
        <div class="form-group">
          <label for="reset-code" class="form-label">验证码</label>
          <input
            id="reset-code"
            v-model="resetForm.code"
            type="text"
            class="form-input"
            placeholder="请输入收到的验证码"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="reset-password" class="form-label">新密码</label>
          <input
            id="reset-password"
            v-model="resetForm.password"
            type="password"
            class="form-input"
            placeholder="请设置新密码（至少8位）"
            required
            minlength="8"
          >
        </div>
        
        <button type="submit" class="submit-button" :disabled="isLoading">
          <span v-if="isLoading" class="loading-spinner"></span>
          {{ isLoading ? '重置中...' : '重置密码' }}
        </button>
        
        <button type="button" class="back-button" @click="switchTab('forgot')">
          返回上一步
        </button>
        
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// 状态管理
const currentTab = ref<'login' | 'register' | 'forgot' | 'reset'>('login');
const isLoading = ref(false);
const isSendingCode = ref(false);
const countdown = ref(0);
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();

// 表单数据
const loginForm = reactive({
  email: '',
  password: '',
  rememberMe: false
});

const registerForm = reactive({
  email: '',
  code: '',
  password: '',
  agreeTerms: false
});

const forgotForm = reactive({
  email: ''
});

const resetForm = reactive({
  email: '',
  code: '',
  password: ''
});

// 切换表单选项卡
function switchTab(tab: 'login' | 'register' | 'forgot' | 'reset') {
  currentTab.value = tab;
  errorMessage.value = '';
  successMessage.value = '';
}

// 处理登录
async function handleLogin() {
  isLoading.value = true;
  errorMessage.value = '';
  
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginForm.email,
        password: loginForm.password
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || '登录失败');
    }
    
    // 保存token
    if (data.token) {
      localStorage.setItem('authToken', data.token);
    }

    // 处理"记住我"功能
    if (loginForm.rememberMe) {
      // 只存储邮箱，不存储密码，提高安全性
      saveCredentials(loginForm.email);
    } else {
      // 如果取消勾选，清除已保存的凭证
      clearSavedCredentials();
    }
    
    console.log('登录成功:', data);
    // 登录成功后跳转到编辑页面
    router.push('/editing/main');
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '登录失败，请检查您的网络连接或稍后再试';
    console.error('登录错误:', error);
  } finally {
    isLoading.value = false;
  }
}

// 保存凭证到本地存储
function saveCredentials(email: string) {
  try {
    localStorage.setItem('rememberedCredentials', JSON.stringify({
      email,
      // 注意：这里不存储密码，只存储邮箱以提高安全性
      timestamp: new Date().getTime()
    }));
  } catch (error) {
    console.error('保存凭证失败:', error);
  }
}

// 清除本地存储中的凭证
function clearSavedCredentials() {
  try {
    localStorage.removeItem('rememberedCredentials');
  } catch (error) {
    console.error('清除凭证失败:', error);
  }
}

// 发送注册验证码
async function sendRegisterCode() {
  if (!registerForm.email) {
    errorMessage.value = '请先输入邮箱地址';
    return;
  }

  // 如果正在倒计时，不执行发送操作
  if (countdown.value > 0) {
    return;
  }
  
  isSendingCode.value = true;
  errorMessage.value = '';
  
  try {
    const response = await fetch('/api/sendCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: registerForm.email })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || '发送验证码失败');
    }
    
    successMessage.value = '验证码已发送，请查收';
    
    // 开始倒计时
    startCountdown();
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '发送验证码失败，请稍后再试';
    console.error('发送验证码错误:', error);
  } finally {
    isSendingCode.value = false;
  }
}

// 处理注册
async function handleRegister() {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';
  
  // 表单验证
  if (registerForm.password.length < 8) {
    errorMessage.value = '密码长度至少为8位';
    isLoading.value = false;
    return;
  }
  
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: registerForm.email,
        password: registerForm.password,
        code: registerForm.code
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || '注册失败');
    }
    
    console.log('注册成功:', data);
    
    // 注册成功后显示提示并切换到登录表单
    successMessage.value = '注册成功，请登录';
    
    // 3秒后自动切换到登录表单
    setTimeout(() => {
      switchTab('login');
      successMessage.value = '';
      // 清空注册表单
      registerForm.email = '';
      registerForm.code = '';
      registerForm.password = '';
      registerForm.agreeTerms = false;
    }, 3000);
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '注册失败，请检查您的网络连接或稍后再试';
    console.error('注册错误:', error);
  } finally {
    isLoading.value = false;
  }
}

// 处理忘记密码请求
async function handleForgotRequest() {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  // 如果正在倒计时，不执行发送操作
  if (countdown.value > 0) {
    return;
  }
  
  try {
    const response = await fetch('/api/reset/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: forgotForm.email })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || '发送失败');
    }
    
    // 保存邮箱信息并跳转到重置密码页面
    resetForm.email = forgotForm.email;
    switchTab('reset');
    successMessage.value = '重置验证码已发送到您的邮箱';
    
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '发送失败，请检查您的邮箱地址或稍后再试';
    console.error('发送重置链接错误:', error);
  } finally {
    isLoading.value = false;
  }
}

// 处理重置密码
async function handleResetPassword() {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';
  
  // 表单验证
  if (resetForm.password.length < 8) {
    errorMessage.value = '密码长度至少为8位';
    isLoading.value = false;
    return;
  }
  
  try {
    const response = await fetch('/api/reset/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: resetForm.email,
        code: resetForm.code,
        newPassword: resetForm.password
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || '重置密码失败');
    }
    
    console.log('密码重置成功:', data);
    
    // 显示成功提示并切换到登录表单
    successMessage.value = '密码已重置成功，请登录';
    
    // 3秒后自动切换到登录表单
    setTimeout(() => {
      switchTab('login');
      successMessage.value = '';
      // 清空表单
      forgotForm.email = '';
      resetForm.email = '';
      resetForm.code = '';
      resetForm.password = '';
    }, 3000);
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '重置密码失败，请稍后再试';
    console.error('重置密码错误:', error);
  } finally {
    isLoading.value = false;
  }
}

// 验证码倒计时
function startCountdown() {
  countdown.value = 60;
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// 页面加载时检查本地存储
onMounted(() => {
  loadSavedCredentials();
});

// 从本地存储加载保存的凭证
function loadSavedCredentials() {
  try {
    const savedCredentials = localStorage.getItem('rememberedCredentials');
    if (savedCredentials) {
      const credentials = JSON.parse(savedCredentials);
      // 仅填充邮箱，不自动填充密码以提高安全性
      loginForm.email = credentials.email || '';
      loginForm.rememberMe = true;
    }
  } catch (error) {
    console.error('加载保存的凭证失败:', error);
  }
}

</script>

<style scoped>
/* 全局样式 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 登录容器 */
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 背景装饰 */
.background-decoration {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  filter: blur(50px);
  top: -100px;
  left: -100px;
  z-index: 0;
}

.background-decoration-2 {
  top: auto;
  left: auto;
  bottom: -100px;
  right: -100px;
}

/* 登录卡片 */
.login-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  padding: 40px;
  width: 100%;
  max-width: 450px;
  position: relative;
  z-index: 1;
}

/* 登录标题 */
.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-title {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

/* 选项卡 */
.login-tabs {
  display: flex;
  justify-content: center;
  gap: 5px;
  border-bottom: 2px solid #f0f0f0;
}

.tab-button {
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}

.tab-button:hover {
  color: #667eea;
}

.tab-button.active {
  color: #667eea;
  font-weight: 600;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #667eea;
}

/* 表单样式 */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #555;
}

.form-input {
  padding: 12px 16px;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;
}

.form-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
}

/* 验证码输入组 */
.code-input-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

.code-input {
  flex: 1;
}

.send-code-button {
  padding: 12px 16px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.send-code-button:hover:not(:disabled) {
  background: #5a67d8;
}

.send-code-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
}

.remember-me input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.forgot-link {
  background: none;
  border: none;
  color: #667eea;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.forgot-link:hover {
  color: #5a67d8;
  text-decoration: underline;
}

/* 按钮样式 */
.submit-button {
  padding: 14px 24px;
  background: #667eea; /* 纯蓝色背景 */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.submit-button:hover:not(:disabled) {
  background: #5a67d8; /* 悬停时颜色加深 */
  transform: translateY(0);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.back-button {
  padding: 12px 24px;
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.back-button:hover {
  background: #667eea;
  color: white;
  transform: none; /* 移除上移效果 */
  box-shadow: none; /* 移除阴影效果 */
}

.back-button:active {
  transform: translateY(0);
}

/* 加载指示器 */
.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 消息提示 */
.error-message {
  background: #fee2e2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-top: -10px;
}

.success-message {
  background: #d1fae5;
  color: #065f46;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-top: -10px;
}

/* 忘记密码描述 */
.forgot-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-top: -10px;
}

/* 服务条款链接 */
.terms-link {
  color: #667eea;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 576px) {
  .login-card {
    margin: 20px;
    padding: 30px 20px;
  }
  
  .login-title {
    font-size: 24px;
  }
  
  .tab-button {
    font-size: 14px;
    padding: 8px 16px;
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .form-input {
    font-size: 14px;
  }
  
  .submit-button,
  .back-button {
    font-size: 14px;
    padding: 12px 20px;
  }
  
  .code-input-group {
    flex-direction: column;
  }
  
  .send-code-button {
    width: 100%;
  }
}
</style>