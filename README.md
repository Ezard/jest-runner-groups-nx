# jest-runner-groups-nx

Jest runner to enable usage of jest-runner-groups with Nx

## Installation

`npm install jest-runner-groups-nx --save-dev`

## Usage

Update the `runner` field in your Jest config to be `groups-nx`, i.e.

`jest.config.json`

```json
{
  "runner": "groups-nx"
}
```

## Version Compatibility

| Nx  | jest-runner-groups-nx |
|-----|-----------------------|
| 14  | 1                     |
| 15  | 2                     |
