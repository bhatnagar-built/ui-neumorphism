import { useState } from 'react';
import {
  Sun,
  Moon,
  Github,
  Layers,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  Search,
  User,
  Mail,
  Lock,
  Sparkles,
  Sliders,
  Bell,
} from 'lucide-react';
import {
  ThemeProvider,
  useNeumorphicTheme,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardContent,
  Switch,
  Input,
  Slider,
  Progress,
  Avatar,
  Badge,
  Tabs,
  Modal,
  Alert,
  Tooltip,
} from '../lib';
import { CodeBlock } from './components/CodeBlock';
import './App.css';

const ShowcaseContent = () => {
  const { theme, toggleTheme, distance, setDistance, blur, setBlur } = useNeumorphicTheme();
  const [activeTab, setActiveTab] = useState('buttons');

  // Interactive states
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [inputValue, setInputValue] = useState('abhishek@design.dev');
  const [sliderVal, setSliderVal] = useState(65);
  const [progressVal] = useState(72);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Music Widget state
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicProgress, setMusicProgress] = useState(42);
  const [isLiked, setIsLiked] = useState(true);

  // Smart Home state
  const [targetTemp, setTargetTemp] = useState(22);
  const [acPower, setAcPower] = useState(true);

  const mainTabs = [
    { id: 'buttons', label: 'Buttons & Controls', icon: <Layers size={16} /> },
    { id: 'inputs', label: 'Forms & Inputs', icon: <Sliders size={16} /> },
    { id: 'cards', label: 'Cards & Widgets', icon: <Sparkles size={16} /> },
    { id: 'feedback', label: 'Feedback & Overlays', icon: <Bell size={16} /> },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="brand-wrapper">
          <div className="brand-logo nm-raised">
            <Layers size={26} />
          </div>
          <div>
            <h1 className="brand-title">Neumorphic UI</h1>
            <p className="brand-tagline">By Abhishek Bhatnagar</p>
          </div>
        </div>

        <div className="header-actions">
          <IconButton
            icon={theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            variant="flat"
            shape="circle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          />
          <IconButton
            icon={<Github size={20} />}
            variant="flat"
            shape="circle"
            onClick={() => window.open('https://github.com/abhidp/neumorphic-ui', '_blank')}
            aria-label="GitHub Repository"
          />
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-badge-wrap">
          <Badge variant="flat" color="primary">
            v1.0.0 — Production Ready
          </Badge>
        </div>
        <h2 className="hero-title">
          Modern, Tactile <span className="hero-title-accent">Soft UI</span> for React
        </h2>
        <p className="hero-desc">
          A high-performance, accessible React component library crafted with soft light physics,
          dual-shadow depth calculations, seamless dark mode, and zero third-party UI dependencies.
        </p>

        <div className="hero-cta-group">
          <div className="install-command-box">
            <span>npm i neumorphic-ui-react</span>
          </div>
          <Button
            variant="raised"
            color="primary"
            size="md"
            shape="pill"
            leftIcon={<Sparkles size={16} />}
            onClick={() => {
              const el = document.getElementById('demo-tabs');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Showcase
          </Button>
        </div>
      </section>

      {/* Global Neumorphic Control Bar */}
      <Card variant="flat" radius="lg" padding="md" className="control-bar">
        <div className="control-group">
          <Slider
            label="Shadow Distance"
            min={2}
            max={14}
            value={distance}
            onChange={setDistance}
          />
        </div>
        <div className="control-group">
          <Slider
            label="Shadow Blur Radius"
            min={4}
            max={28}
            value={blur}
            onChange={setBlur}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Switch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            label={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          />
        </div>
      </Card>

      {/* Navigation Tabs */}
      <div id="demo-tabs" style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
        <Tabs tabs={mainTabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* TAB 1: BUTTONS & CONTROLS */}
      {activeTab === 'buttons' && (
        <div className="showcase-grid">
          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Button Elevations</CardTitle>
              <CardSubtitle>Dual-shadow elevations and gradient curvatures</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div className="preview-box">
                <Button variant="flat">Flat</Button>
                <Button variant="raised">Raised</Button>
                <Button variant="inset">Inset</Button>
                <Button variant="convex">Convex</Button>
                <Button variant="concave">Concave</Button>
              </div>
              <CodeBlock
                code={`<Button variant="flat">Flat</Button>
<Button variant="raised">Raised</Button>
<Button variant="inset">Inset</Button>
<Button variant="convex">Convex</Button>
<Button variant="concave">Concave</Button>`}
              />
            </CardContent>
          </Card>

          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Color Variants & States</CardTitle>
              <CardSubtitle>Accent highlights, loading spinners, and pills</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div className="preview-box">
                <Button variant="flat" color="primary" shape="pill">
                  Primary Pill
                </Button>
                <Button variant="flat" color="success">
                  Success
                </Button>
                <Button variant="flat" color="danger">
                  Danger
                </Button>
                <Button
                  variant="flat"
                  loading={loadingBtn}
                  onClick={() => {
                    setLoadingBtn(true);
                    setTimeout(() => setLoadingBtn(false), 2000);
                  }}
                >
                  {loadingBtn ? 'Loading...' : 'Click for Spinner'}
                </Button>
              </div>
              <CodeBlock
                code={`<Button color="primary" shape="pill">Primary Pill</Button>
<Button color="success">Success</Button>
<Button color="danger">Danger</Button>
<Button loading={isLoading}>Submit</Button>`}
              />
            </CardContent>
          </Card>

          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Icon Buttons</CardTitle>
              <CardSubtitle>Circular and square tactile controls</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div className="preview-box">
                <IconButton icon={<Heart size={18} />} shape="circle" variant="flat" color="danger" />
                <IconButton icon={<Volume2 size={18} />} shape="circle" variant="raised" color="primary" />
                <IconButton icon={<Search size={18} />} shape="circle" variant="inset" />
                <IconButton icon={<User size={18} />} shape="rounded" variant="flat" />
              </div>
              <CodeBlock
                code={`<IconButton icon={<Heart size={18} />} shape="circle" color="danger" />
<IconButton icon={<Volume2 size={18} />} shape="circle" variant="raised" color="primary" />
<IconButton icon={<Search size={18} />} shape="circle" variant="inset" />`}
              />
            </CardContent>
          </Card>

          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Button Sizing</CardTitle>
              <CardSubtitle>Proportional padding and typography scale</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div className="preview-box">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <CodeBlock
                code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* TAB 2: FORMS & INPUTS */}
      {activeTab === 'inputs' && (
        <div className="showcase-grid">
          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Neumorphic Text Fields</CardTitle>
              <CardSubtitle>Carved inset inputs with icon prefixes and clear triggers</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '16px 0' }}>
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  leftIcon={<Mail size={18} />}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  clearable
                  onClear={() => setInputValue('')}
                  helperText="We will never share your personal email."
                />
                <Input
                  label="Security Password"
                  type="password"
                  placeholder="••••••••••••"
                  leftIcon={<Lock size={18} />}
                />
              </div>
              <CodeBlock
                code={`<Input
  label="Email Address"
  leftIcon={<Mail size={18} />}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  clearable
  onClear={() => setEmail('')}
  helperText="We will never share your personal email."
/>`}
              />
            </CardContent>
          </Card>

          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Tactile Switches</CardTitle>
              <CardSubtitle>Recessed groove tracks with sliding extruded knob</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div className="preview-box" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '18px' }}>
                <Switch
                  checked={switchChecked}
                  onChange={setSwitchChecked}
                  label="Enable Neumorphic Lighting"
                />
                <Switch
                  checked={notificationsEnabled}
                  onChange={setNotificationsEnabled}
                  label="Push Notifications"
                />
                <Switch checked={false} onChange={() => {}} disabled label="Disabled Switch" />
              </div>
              <CodeBlock
                code={`<Switch
  checked={isEnabled}
  onChange={setIsEnabled}
  label="Enable Neumorphic Lighting"
/>`}
              />
            </CardContent>
          </Card>

          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Tactile Slider</CardTitle>
              <CardSubtitle>Continuous recessed track with live numeric indicator</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div style={{ margin: '24px 0' }}>
                <Slider
                  label="Master Volume"
                  value={sliderVal}
                  onChange={setSliderVal}
                  min={0}
                  max={100}
                />
              </div>
              <CodeBlock
                code={`<Slider
  label="Master Volume"
  value={sliderVal}
  onChange={setSliderVal}
  min={0}
  max={100}
/>`}
              />
            </CardContent>
          </Card>

          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Progress Indicators</CardTitle>
              <CardSubtitle>Glowing recessed status meters</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', margin: '20px 0' }}>
                <Progress value={progressVal} label="Storage Sync" showValue color="primary" />
                <Progress value={90} label="Security Score" showValue color="success" />
                <Progress value={45} label="Battery Level" showValue color="warning" />
              </div>
              <CodeBlock
                code={`<Progress value={72} label="Storage Sync" showValue color="primary" />
<Progress value={90} label="Security Score" showValue color="success" />`}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* TAB 3: CARDS & WIDGETS */}
      {activeTab === 'cards' && (
        <div className="showcase-grid">
          {/* Neumorphic Music Player Widget */}
          <Card variant="raised" radius="xl" padding="lg" className="music-player-widget">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <IconButton icon={<SkipBack size={16} />} size="sm" shape="circle" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.05em' }}>NOW PLAYING</span>
              <IconButton
                icon={<Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />}
                size="sm"
                shape="circle"
                color={isLiked ? 'danger' : 'default'}
                onClick={() => setIsLiked(!isLiked)}
              />
            </div>

            <div className="music-cover nm-inset">
              <Sparkles size={48} />
            </div>

            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', fontWeight: 800 }}>Midnight Reverie</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--nm-text-muted)' }}>Abhishek & Synth Collective</p>
            </div>

            <Slider
              value={musicProgress}
              onChange={setMusicProgress}
              min={0}
              max={100}
              showValue={false}
            />

            <div className="music-controls">
              <IconButton icon={<SkipBack size={20} />} size="md" shape="circle" variant="flat" />
              <IconButton
                icon={isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '2px' }} />}
                size="lg"
                shape="circle"
                variant="raised"
                color="primary"
                onClick={() => setIsPlaying(!isPlaying)}
              />
              <IconButton icon={<SkipForward size={20} />} size="md" shape="circle" variant="flat" />
            </div>
          </Card>

          {/* Smart Home Climate Card */}
          <Card variant="flat" radius="xl" padding="lg">
            <CardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <CardTitle>Living Room AC</CardTitle>
                  <CardSubtitle>Smart Climate Controller</CardSubtitle>
                </div>
                <Switch checked={acPower} onChange={setAcPower} />
              </div>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
                <div
                  className="nm-convex"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--nm-primary)' }}>
                    {targetTemp}°
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--nm-text-muted)', fontWeight: 600 }}>
                    COOLING MODE
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '16px' }}>
                <Button
                  variant="flat"
                  size="md"
                  shape="pill"
                  onClick={() => setTargetTemp((t) => Math.max(16, t - 1))}
                >
                  - 1°C
                </Button>
                <Button
                  variant="flat"
                  size="md"
                  shape="pill"
                  onClick={() => setTargetTemp((t) => Math.min(30, t + 1))}
                >
                  + 1°C
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* TAB 4: FEEDBACK & OVERLAYS */}
      {activeTab === 'feedback' && (
        <div className="showcase-grid">
          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Neumorphic Dialogs</CardTitle>
              <CardSubtitle>Floating modals with soft edge diffusion</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div className="preview-box">
                <Button variant="raised" color="primary" onClick={() => setIsModalOpen(true)}>
                  Open Neumorphic Modal
                </Button>
              </div>
              <CodeBlock
                code={`<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirmation">
  <p>Your settings have been updated.</p>
  <Button onClick={() => setIsOpen(false)}>Done</Button>
</Modal>`}
              />
            </CardContent>
          </Card>

          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardSubtitle>Inset status notifications with colored accent borders</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '16px 0' }}>
                <Alert type="success" title="Changes Saved">
                  Your neumorphic preferences have been synced to local storage.
                </Alert>
                <Alert type="warning" title="Connection Warning">
                  Latency to regional cluster is slightly higher than usual.
                </Alert>
                <Alert type="danger" title="Authentication Required">
                  Please sign in to access your cloud components.
                </Alert>
              </div>
              <CodeBlock
                code={`<Alert type="success" title="Success">Changes saved successfully.</Alert>
<Alert type="danger" title="Error">Authentication required.</Alert>`}
              />
            </CardContent>
          </Card>

          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Avatars & Badges</CardTitle>
              <CardSubtitle>Profile avatars with presence indicators and status tags</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div className="preview-box">
                <Avatar initials="AB" size="lg" status="online" variant="raised" />
                <Avatar initials="JS" size="md" status="busy" variant="flat" />
                <Badge variant="flat" color="primary">Active</Badge>
                <Badge variant="inset" color="success">Approved</Badge>
                <Badge variant="flat" color="danger">Failed</Badge>
              </div>
              <CodeBlock
                code={`<Avatar initials="AB" size="lg" status="online" variant="raised" />
<Badge variant="flat" color="primary">Active</Badge>
<Badge variant="inset" color="success">Approved</Badge>`}
              />
            </CardContent>
          </Card>

          <Card variant="flat" radius="lg">
            <CardHeader>
              <CardTitle>Interactive Tooltips</CardTitle>
              <CardSubtitle>Light-reactive floating info capsules</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div className="preview-box">
                <Tooltip content="Tooltip from above!">
                  <Button variant="flat">Hover Me (Top)</Button>
                </Tooltip>
                <Tooltip content="Floating tooltip beneath" position="bottom">
                  <Button variant="inset">Hover Me (Bottom)</Button>
                </Tooltip>
              </div>
              <CodeBlock
                code={`<Tooltip content="Quick tip" position="top">
  <Button variant="flat">Hover Me</Button>
</Tooltip>`}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* Modal instance */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Tactile Modal Dialog"
      >
        <p style={{ color: 'var(--nm-text-muted)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
          This dialog uses deep diffuse ambient occlusion and soft highlight reflections to appear
          physically extruded above the viewport surface with zero hard borders.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <Button variant="flat" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="raised" color="primary" onClick={() => setIsModalOpen(false)}>
            Acknowledge
          </Button>
        </div>
      </Modal>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          Designed & Engineered by{' '}
          <a href="https://github.com/abhidp" target="_blank" rel="noreferrer">
            Abhishek Bhatnagar
          </a>
        </p>
        <p>Released under the MIT License • Built with React 19, TypeScript & Vite</p>
      </footer>
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider defaultTheme="light" defaultDistance={6} defaultBlur={14}>
      <ShowcaseContent />
    </ThemeProvider>
  );
}

export default App;
