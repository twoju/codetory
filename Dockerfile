FROM python:3.11-buster

ENV PYTHONBUFFERED=1

WORKDIR /src

RUN pip install "poetry==1.8.2"

COPY pyproject.toml*poetry.lock* ./

RUN poetry config virtualenvs.in-project true
RUN if [ -f pyproject.toml ]; then poetry install --no-root; fi

ENTRYPOINT ["poetry", "run", "uvicorn", "backend.main:app", "--host", "0.0.0.0", "--reload"]
